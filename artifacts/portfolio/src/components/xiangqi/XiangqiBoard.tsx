import { useMemo, useState } from "react";
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
} from "@/lib/xiangqi-engine";

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
  const [board, setBoard] = useState<Board>(() => createInitialBoard());
  const [turn, setTurn] = useState<PlayerColor>("red");
  const [selected, setSelected] = useState<Position | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [lastMove, setLastMove] = useState<{ from: Position; to: Position } | null>(null);
  const [status, setStatus] = useState<GameStatus>({ over: false });

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
  }

  function undoMove() {
    if (history.length === 0 || status.over) return;
    const prev = history[history.length - 1];
    setBoard(prev.board);
    setTurn(prev.turn);
    setHistory((h) => h.slice(0, -1));
    setSelected(null);
    setLastMove(null);
    setStatus({ over: false });
  }

  function handleSquareClick(pos: Position) {
    if (status.over) return;
    const piece = board[pos.row][pos.col];

    if (selected) {
      const isLegal = legalMoves.some((m) => m.row === pos.row && m.col === pos.col);
      if (isLegal) {
        const movingPiece = board[selected.row][selected.col];
        const next = cloneBoard(board);
        next[pos.row][pos.col] = movingPiece;
        next[selected.row][selected.col] = null;

        setHistory((h) => [...h, { board, turn }]);
        setBoard(next);
        setLastMove({ from: selected, to: pos });
        setSelected(null);

        const nextTurn = otherColor(turn);
        setTurn(nextTurn);

        if (!hasAnyLegalMove(next, nextTurn)) {
          const reason = isInCheck(next, nextTurn) ? "checkmate" : "stalemate";
          setStatus({ over: true, winner: turn, reason });
        }
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

  const selectedPiece = selected ? board[selected.row][selected.col] : null;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <div
          className={`rounded-full px-4 py-1.5 font-medium tracking-wide uppercase text-xs border ${
            turn === "red"
              ? "bg-red-600/20 border-red-500/60 text-red-300"
              : "bg-white/10 border-white/30 text-white/80"
          }`}
        >
          {status.over ? "Game Over" : `${turn === "red" ? "Red" : "Black"} to move`}
        </div>
        {!status.over && inCheck && (
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

      <div className="flex items-center gap-3">
        <button
          onClick={undoMove}
          disabled={history.length === 0}
          className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-wide hover:text-white hover:border-white/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Undo
        </button>
        <button
          onClick={resetGame}
          className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-wide hover:text-white hover:border-white/40 transition-colors"
        >
          New Game
        </button>
      </div>

      {selectedPiece && !status.over && (
        <p className="text-xs text-white/40">
          Selected: {selectedPiece.color} {selectedPiece.type} — tap a highlighted square to move.
        </p>
      )}
    </div>
  );
}
