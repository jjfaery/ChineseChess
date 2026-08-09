import { useEffect, useMemo, useRef, useState } from "react";
import {
  Board,
  COLS,
  ROWS,
  PieceType,
  PlayerColor,
  Position,
  cloneBoard,
  createInitialBoard,
  getLegalMoves,
  hasAnyLegalMove,
  isInCheck,
  otherColor,
  suggestMove,
  MoveSuggestion,
} from "@/lib/xiangqi-engine";
import { connectToRoom, createRoomId, RoomConnection } from "@/lib/xiangqi-online";

type GameMode = "two-player" | "vs-computer" | "online";
type OnlineStatus = "connecting" | "waiting" | "connected" | "opponent-left" | "error";

const PIECE_TIPS: { type: PieceType; label: string; tip: string }[] = [
  { type: "general", label: "General (帥 / 將)", tip: "Moves one point orthogonally, and must stay inside its 3×3 palace. Two Generals can never face each other on an open file with nothing between them." },
  { type: "advisor", label: "Advisor (仕 / 士)", tip: "Moves one point diagonally, and never leaves the palace." },
  { type: "elephant", label: "Elephant (相 / 象)", tip: "Moves exactly two points diagonally, can't cross the river, and is blocked if the midpoint is occupied." },
  { type: "horse", label: "Horse (傌 / 馬)", tip: "Moves like a knight, but is blocked if the adjacent orthogonal point in its direction of travel is occupied ('hobbling the horse's leg')." },
  { type: "chariot", label: "Chariot (俥 / 車)", tip: "Slides any distance along rows or columns, like a rook. Usually the strongest piece on the board." },
  { type: "cannon", label: "Cannon (炮 / 砲)", tip: "Slides like a chariot when not capturing, but to capture it must jump over exactly one piece (of either color) first." },
  { type: "soldier", label: "Soldier (兵 / 卒)", tip: "Moves one point forward only — until it crosses the river, after which it can also move one point sideways. Never moves backward." },
];

const STRATEGY_TIPS = [
  "Develop your Horses and Cannons early — Chariots are already strong on open files.",
  "Cannons are most powerful before the board empties out; they need a piece to jump over.",
  "Keep your Advisors and Elephants near the palace — they defend the General and can't cross the river anyway.",
  "Watch out for the 'flying General' rule: never leave your General facing the enemy General on a clear file.",
  "A player with no legal moves loses immediately in Xiangqi — even if their General isn't in check.",
];

const CELL = 56;
const MARGIN = 32;
const BOARD_WIDTH = MARGIN * 2 + (COLS - 1) * CELL;
const BOARD_HEIGHT = MARGIN * 2 + (ROWS - 1) * CELL;

const PIECE_LABELS: Record<PlayerColor, Record<PieceType, string>> = {
  red: {
    general: "帥",
    advisor: "仕",
    elephant: "相",
    horse: "傌",
    chariot: "俥",
    cannon: "炮",
    soldier: "兵",
  },
  black: {
    general: "將",
    advisor: "士",
    elephant: "象",
    horse: "馬",
    chariot: "車",
    cannon: "砲",
    soldier: "卒",
  },
};

function x(col: number): number {
  return MARGIN + col * CELL;
}
function y(row: number): number {
  return MARGIN + row * CELL;
}

interface HistoryEntry {
  board: Board;
  turn: PlayerColor;
}

interface GameStatus {
  over: boolean;
  winner?: PlayerColor;
  reason?: "checkmate" | "stalemate";
}

export default function XiangqiBoard() {
  const [mode, setMode] = useState<GameMode>("two-player");
  const [humanColor, setHumanColor] = useState<PlayerColor>("red");
  const [board, setBoard] = useState<Board>(() => createInitialBoard());
  const [turn, setTurn] = useState<PlayerColor>("red");
  const [selected, setSelected] = useState<Position | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [lastMove, setLastMove] = useState<{ from: Position; to: Position } | null>(null);
  const [status, setStatus] = useState<GameStatus>({ over: false });
  const [hint, setHint] = useState<MoveSuggestion | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [thinking, setThinking] = useState(false);

  const [onlineRoomId, setOnlineRoomId] = useState<string | null>(null);
  const [onlineColor, setOnlineColor] = useState<PlayerColor | null>(null);
  const [onlineStatus, setOnlineStatus] = useState<OnlineStatus>("connecting");
  const [onlineError, setOnlineError] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const connectionRef = useRef<RoomConnection | null>(null);
  const applyingRemoteMoveRef = useRef(false);

  const computerColor = mode === "vs-computer" ? otherColor(humanColor) : null;

  const legalMoves = useMemo(() => {
    if (!selected) return [];
    return getLegalMoves(board, selected);
  }, [board, selected]);

  const inCheck = useMemo(() => !status.over && isInCheck(board, turn), [board, turn, status.over]);

  function resetGame() {
    setBoard(createInitialBoard());
    setTurn("red");
    setSelected(null);
    setHistory([]);
    setLastMove(null);
    setStatus({ over: false });
    setHint(null);
    setThinking(false);
  }

  function changeMode(nextMode: GameMode) {
    setMode(nextMode);
    resetGame();
  }

  function changeHumanColor(color: PlayerColor) {
    setHumanColor(color);
    resetGame();
  }

  function undoMove() {
    if (history.length === 0 || status.over || thinking) return;
    // In vs-computer mode, step back past the computer's reply too so it's the human's turn again.
    const stepsBack = mode === "vs-computer" && history.length >= 2 ? 2 : 1;
    const prev = history[history.length - stepsBack];
    setBoard(prev.board);
    setTurn(prev.turn);
    setHistory((h) => h.slice(0, -stepsBack));
    setSelected(null);
    setLastMove(null);
    setStatus({ over: false });
    setHint(null);
  }

  function applyMove(from: Position, to: Position) {
    const movingPiece = board[from.row][from.col];
    if (!movingPiece) return;
    const next = cloneBoard(board);
    next[to.row][to.col] = movingPiece;
    next[from.row][from.col] = null;

    setHistory((h) => [...h, { board, turn }]);
    setBoard(next);
    setLastMove({ from, to });
    setSelected(null);
    setHint(null);

    const nextTurn = otherColor(turn);
    setTurn(nextTurn);

    if (!hasAnyLegalMove(next, nextTurn)) {
      const reason = isInCheck(next, nextTurn) ? "checkmate" : "stalemate";
      setStatus({ over: true, winner: turn, reason });
    }

    if (mode === "online" && !applyingRemoteMoveRef.current) {
      connectionRef.current?.send({ type: "move", from, to });
    }
  }

  function handleSquareClick(pos: Position) {
    if (status.over || thinking) return;
    if (computerColor && turn === computerColor) return;
    if (mode === "online" && (onlineStatus !== "connected" || turn !== onlineColor)) return;

    const piece = board[pos.row][pos.col];

    if (selected) {
      const isLegal = legalMoves.some((m) => m.row === pos.row && m.col === pos.col);
      if (isLegal) {
        applyMove(selected, pos);
        return;
      }

      if (piece && piece.color === turn) {
        setSelected(pos);
        return;
      }

      setSelected(null);
      return;
    }

    if (piece && piece.color === turn) {
      setSelected(pos);
    }
  }

  function requestHint() {
    if (status.over || thinking) return;
    if (computerColor && turn === computerColor) return;
    const suggestion = suggestMove(board, turn);
    setHint(suggestion);
  }

  // Computer's turn: pick a move via the same heuristic used for hints, after a short "thinking" delay.
  useEffect(() => {
    if (!computerColor || turn !== computerColor || status.over) return;
    setThinking(true);
    const timeout = setTimeout(() => {
      const move = suggestMove(board, computerColor);
      if (move) applyMove(move.from, move.to);
      setThinking(false);
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, turn, computerColor, status.over]);

  // Keep stable refs to the latest applyMove/resetGame so the WebSocket message
  // handler below (which is only re-created when the room changes) never calls
  // into a stale closure over `board`/`turn`.
  const applyMoveRef = useRef(applyMove);
  applyMoveRef.current = applyMove;
  const resetGameRef = useRef(resetGame);
  resetGameRef.current = resetGame;

  // Auto-join a room shared via link, e.g. /games/chinese-chess?room=<id>.
  useEffect(() => {
    const roomFromUrl = new URLSearchParams(window.location.search).get("room");
    if (roomFromUrl) {
      setMode("online");
      setOnlineRoomId(roomFromUrl);
    }
    // Only ever check the URL once, on first mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Connect to (or leave) the relay whenever we enter/leave online mode with an active room.
  useEffect(() => {
    if (mode !== "online" || !onlineRoomId) {
      connectionRef.current?.close();
      connectionRef.current = null;
      return;
    }

    setOnlineStatus("connecting");
    setOnlineColor(null);
    setOnlineError(null);
    resetGameRef.current();

    const connection = connectToRoom(onlineRoomId, {
      onClose: () => {
        setOnlineStatus((prev) => (prev === "error" ? prev : "opponent-left"));
      },
      onError: () => setOnlineStatus("error"),
      onMessage: (message) => {
        switch (message.type) {
          case "assigned":
            setOnlineColor(message.color);
            setOnlineStatus("waiting");
            break;
          case "opponent-status":
            setOnlineStatus(message.connected ? "connected" : "waiting");
            break;
          case "move":
            applyingRemoteMoveRef.current = true;
            applyMoveRef.current(message.from, message.to);
            applyingRemoteMoveRef.current = false;
            break;
          case "reset":
            resetGameRef.current();
            break;
          case "error":
            setOnlineStatus("error");
            setOnlineError(
              message.reason === "room-full"
                ? "This game link already has two players."
                : "Something went wrong connecting to the game.",
            );
            break;
        }
      },
    });

    connectionRef.current = connection;

    return () => {
      connection.close();
      connectionRef.current = null;
    };
  }, [mode, onlineRoomId]);

  function createOnlineGame() {
    const roomId = createRoomId();
    const url = new URL(window.location.href);
    url.searchParams.set("room", roomId);
    window.history.replaceState(null, "", url);
    setOnlineRoomId(roomId);
  }

  function rematch() {
    resetGame();
    connectionRef.current?.send({ type: "reset" });
  }

  async function copyRoomLink() {
    await navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  }

  const selectedPiece = selected ? board[selected.row][selected.col] : null;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="flex rounded-full border border-white/15 p-1 text-xs uppercase tracking-wide">
          <button
            onClick={() => changeMode("two-player")}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              mode === "two-player" ? "bg-white text-black" : "text-white/60 hover:text-white"
            }`}
          >
            Two Players
          </button>
          <button
            onClick={() => changeMode("vs-computer")}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              mode === "vs-computer" ? "bg-white text-black" : "text-white/60 hover:text-white"
            }`}
          >
            Vs Computer
          </button>
          <button
            onClick={() => changeMode("online")}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              mode === "online" ? "bg-white text-black" : "text-white/60 hover:text-white"
            }`}
          >
            Play Online
          </button>
        </div>

        {mode === "vs-computer" && (
          <div className="flex rounded-full border border-white/15 p-1 text-xs uppercase tracking-wide">
            <button
              onClick={() => changeHumanColor("red")}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                humanColor === "red" ? "bg-red-600 text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Play Red
            </button>
            <button
              onClick={() => changeHumanColor("black")}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                humanColor === "black" ? "bg-white text-black" : "text-white/60 hover:text-white"
              }`}
            >
              Play Black
            </button>
          </div>
        )}

        <button
          onClick={() => setShowHelp((v) => !v)}
          className="px-4 py-1.5 rounded-full border border-white/15 text-xs uppercase tracking-wide text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          {showHelp ? "Hide Rules" : "How to Play"}
        </button>
      </div>

      {mode === "online" && (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm text-white/70 space-y-3">
          {!onlineRoomId && (
            <>
              <p>Create a game and send the link to a friend to play remotely.</p>
              <button
                onClick={createOnlineGame}
                className="px-4 py-2 rounded-full bg-white text-black text-xs uppercase tracking-wide hover:bg-white/90 transition-colors"
              >
                Create Game
              </button>
            </>
          )}

          {onlineRoomId && (
            <>
              <div className="flex items-center justify-center gap-2">
                <input
                  readOnly
                  value={window.location.href}
                  className="flex-1 min-w-0 bg-black/30 border border-white/15 rounded-full px-3 py-1.5 text-xs text-white/70 truncate"
                  onFocus={(e) => e.currentTarget.select()}
                />
                <button
                  onClick={copyRoomLink}
                  className="px-3 py-1.5 rounded-full border border-white/20 text-xs uppercase tracking-wide text-white/80 hover:text-white hover:border-white/40 transition-colors whitespace-nowrap"
                >
                  {linkCopied ? "Copied!" : "Copy Link"}
                </button>
              </div>

              {onlineStatus === "connecting" && <p>Connecting…</p>}
              {onlineStatus === "waiting" && <p>Waiting for your opponent to open the link…</p>}
              {onlineStatus === "connected" && onlineColor && (
                <p>
                  Connected — you are playing <span className="font-semibold text-white">{onlineColor}</span>.
                </p>
              )}
              {onlineStatus === "opponent-left" && <p className="text-amber-300">Your opponent disconnected.</p>}
              {onlineStatus === "error" && <p className="text-red-400">{onlineError}</p>}
            </>
          )}
        </div>
      )}

      {showHelp && (
        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-sm text-white/70 space-y-5">
          <div>
            <h3 className="text-white font-semibold mb-1">Objective</h3>
            <p>
              Checkmate the enemy General, or leave your opponent with no legal move at all —
              both end the game immediately. Red always moves first.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">How each piece moves</h3>
            <ul className="space-y-2">
              {PIECE_TIPS.map((p) => (
                <li key={p.type}>
                  <span className="text-white font-medium">{p.label}:</span> {p.tip}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Tips for learning</h3>
            <ul className="list-disc list-inside space-y-1">
              {STRATEGY_TIPS.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <div
          className={`rounded-full px-4 py-1.5 font-medium tracking-wide uppercase text-xs border ${
            turn === "red"
              ? "bg-red-600/20 border-red-500/60 text-red-300"
              : "bg-white/10 border-white/30 text-white/80"
          }`}
        >
          {status.over
            ? "Game Over"
            : thinking
              ? "Computer is thinking…"
              : `${turn === "red" ? "Red" : "Black"} to move`}
        </div>
        {!status.over && !thinking && inCheck && (
          <div className="rounded-full px-4 py-1.5 font-medium tracking-wide uppercase text-xs bg-amber-500/20 border border-amber-400/60 text-amber-300 animate-pulse">
            Check!
          </div>
        )}
        {status.over && (
          <div className="rounded-full px-4 py-1.5 font-medium tracking-wide uppercase text-xs bg-emerald-500/20 border border-emerald-400/60 text-emerald-300">
            {status.winner === "red" ? "Red" : "Black"} wins by {status.reason}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#e9d8b0] to-[#dcc492] p-4 md:p-6 shadow-2xl">
        <svg
          width={BOARD_WIDTH}
          height={BOARD_HEIGHT}
          viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
          className="max-w-full h-auto"
          role="img"
          aria-label="Xiangqi board"
        >
          {/* horizontal lines */}
          {Array.from({ length: ROWS }, (_, row) => (
            <line
              key={`h-${row}`}
              x1={x(0)}
              y1={y(row)}
              x2={x(COLS - 1)}
              y2={y(row)}
              stroke="#5c4326"
              strokeWidth={1.5}
            />
          ))}

          {/* vertical lines: full-height on edges, broken at the river in between */}
          {Array.from({ length: COLS }, (_, col) => {
            const isEdge = col === 0 || col === COLS - 1;
            if (isEdge) {
              return (
                <line
                  key={`v-${col}`}
                  x1={x(col)}
                  y1={y(0)}
                  x2={x(col)}
                  y2={y(ROWS - 1)}
                  stroke="#5c4326"
                  strokeWidth={1.5}
                />
              );
            }
            return (
              <g key={`v-${col}`}>
                <line x1={x(col)} y1={y(0)} x2={x(col)} y2={y(4)} stroke="#5c4326" strokeWidth={1.5} />
                <line x1={x(col)} y1={y(5)} x2={x(col)} y2={y(ROWS - 1)} stroke="#5c4326" strokeWidth={1.5} />
              </g>
            );
          })}

          {/* palace diagonals */}
          <line x1={x(3)} y1={y(0)} x2={x(5)} y2={y(2)} stroke="#5c4326" strokeWidth={1.5} />
          <line x1={x(5)} y1={y(0)} x2={x(3)} y2={y(2)} stroke="#5c4326" strokeWidth={1.5} />
          <line x1={x(3)} y1={y(7)} x2={x(5)} y2={y(9)} stroke="#5c4326" strokeWidth={1.5} />
          <line x1={x(5)} y1={y(7)} x2={x(3)} y2={y(9)} stroke="#5c4326" strokeWidth={1.5} />

          {/* river text */}
          <text
            x={x(1.5)}
            y={y(4.5) + 8}
            fontSize={20}
            fill="#5c4326"
            fontFamily="serif"
            textAnchor="middle"
          >
            楚 河
          </text>
          <text
            x={x(6.5)}
            y={y(4.5) + 8}
            fontSize={20}
            fill="#5c4326"
            fontFamily="serif"
            textAnchor="middle"
          >
            漢 界
          </text>

          {/* last move highlight */}
          {lastMove && (
            <>
              <circle cx={x(lastMove.from.col)} cy={y(lastMove.from.row)} r={CELL / 2 - 6} fill="none" stroke="#2563eb" strokeWidth={2} strokeDasharray="4 3" opacity={0.6} />
              <circle cx={x(lastMove.to.col)} cy={y(lastMove.to.row)} r={CELL / 2 - 6} fill="none" stroke="#2563eb" strokeWidth={2} opacity={0.6} />
            </>
          )}

          {/* hint highlight */}
          {hint && (
            <>
              <circle cx={x(hint.from.col)} cy={y(hint.from.row)} r={CELL / 2 - 3} fill="none" stroke="#f59e0b" strokeWidth={3} strokeDasharray="5 4" />
              <circle cx={x(hint.to.col)} cy={y(hint.to.row)} r={CELL / 2 - 3} fill="none" stroke="#f59e0b" strokeWidth={3} />
            </>
          )}

          {/* legal move markers */}
          {legalMoves.map((m) => {
            const occupied = board[m.row][m.col];
            return (
              <circle
                key={`move-${m.row}-${m.col}`}
                cx={x(m.col)}
                cy={y(m.row)}
                r={occupied ? CELL / 2 - 4 : 7}
                fill={occupied ? "none" : "rgba(16, 185, 129, 0.55)"}
                stroke={occupied ? "rgba(16, 185, 129, 0.85)" : "none"}
                strokeWidth={occupied ? 3 : 0}
                className="pointer-events-none"
              />
            );
          })}

          {/* click targets + pieces */}
          {board.map((rowArr, row) =>
            rowArr.map((piece, col) => {
              const isSelected = selected?.row === row && selected?.col === col;
              return (
                <g
                  key={`sq-${row}-${col}`}
                  onClick={() => handleSquareClick({ row, col })}
                  className="cursor-pointer"
                >
                  <rect
                    x={x(col) - CELL / 2}
                    y={y(row) - CELL / 2}
                    width={CELL}
                    height={CELL}
                    fill="transparent"
                  />
                  {isSelected && (
                    <circle
                      cx={x(col)}
                      cy={y(row)}
                      r={CELL / 2 - 4}
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth={3}
                    />
                  )}
                  {piece && (
                    <g>
                      <circle
                        cx={x(col)}
                        cy={y(row)}
                        r={CELL / 2 - 8}
                        fill="#f3e6c8"
                        stroke={piece.color === "red" ? "#b91c1c" : "#18181b"}
                        strokeWidth={2.5}
                      />
                      <text
                        x={x(col)}
                        y={y(row) + 8}
                        fontSize={22}
                        fontFamily="serif"
                        fontWeight={700}
                        textAnchor="middle"
                        fill={piece.color === "red" ? "#b91c1c" : "#18181b"}
                      >
                        {PIECE_LABELS[piece.color][piece.type]}
                      </text>
                    </g>
                  )}
                </g>
              );
            }),
          )}
        </svg>
      </div>

      {(mode !== "online" || onlineRoomId) && (
        <div className="flex items-center gap-3">
          <button
            onClick={requestHint}
            disabled={status.over || thinking || (computerColor !== null && turn === computerColor)}
            className="px-4 py-2 rounded-full border border-amber-400/40 text-amber-300 text-xs uppercase tracking-wide hover:text-amber-200 hover:border-amber-400/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Hint
          </button>
          {mode !== "online" && (
            <button
              onClick={undoMove}
              disabled={history.length === 0 || thinking || status.over}
              className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-wide hover:text-white hover:border-white/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Undo
            </button>
          )}
          <button
            onClick={mode === "online" ? rematch : resetGame}
            className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-wide hover:text-white hover:border-white/40 transition-colors"
          >
            {mode === "online" ? "Rematch" : "New Game"}
          </button>
        </div>
      )}

      {hint && !status.over && (
        <p className="text-xs text-amber-300/80 max-w-md text-center">Hint: {hint.reason}</p>
      )}

      {selectedPiece && !status.over && !hint && (
        <p className="text-xs text-white/40">
          Selected: {selectedPiece.color} {selectedPiece.type} — tap a highlighted square to move.
        </p>
      )}
    </div>
  );
}
