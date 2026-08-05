export type PieceType =
  | "general"
  | "advisor"
  | "elephant"
  | "horse"
  | "chariot"
  | "cannon"
  | "soldier";

export type PlayerColor = "red" | "black";

export interface Piece {
  type: PieceType;
  color: PlayerColor;
}

export type Square = Piece | null;
export type Board = Square[][];

export interface Position {
  row: number;
  col: number;
}

export const ROWS = 10;
export const COLS = 9;

const BACK_RANK: PieceType[] = [
  "chariot",
  "horse",
  "elephant",
  "advisor",
  "general",
  "advisor",
  "elephant",
  "horse",
  "chariot",
];

export function createInitialBoard(): Board {
  const board: Board = Array.from({ length: ROWS }, () =>
    Array<Square>(COLS).fill(null),
  );

  BACK_RANK.forEach((type, col) => {
    board[0][col] = { type, color: "black" };
    board[9][col] = { type, color: "red" };
  });

  [1, 7].forEach((col) => {
    board[2][col] = { type: "cannon", color: "black" };
    board[7][col] = { type: "cannon", color: "red" };
  });

  [0, 2, 4, 6, 8].forEach((col) => {
    board[3][col] = { type: "soldier", color: "black" };
    board[6][col] = { type: "soldier", color: "red" };
  });

  return board;
}

export function cloneBoard(board: Board): Board {
  return board.map((row) => row.slice());
}

function inBounds(row: number, col: number): boolean {
  return row >= 0 && row < ROWS && col >= 0 && col < COLS;
}

function inPalace(row: number, col: number, color: PlayerColor): boolean {
  const rows = color === "black" ? [0, 1, 2] : [7, 8, 9];
  return rows.includes(row) && col >= 3 && col <= 5;
}

function isOwnHalf(row: number, color: PlayerColor): boolean {
  return color === "black" ? row <= 4 : row >= 5;
}

function samePos(a: Position, b: Position): boolean {
  return a.row === b.row && a.col === b.col;
}

function pushIfValid(
  board: Board,
  color: PlayerColor,
  row: number,
  col: number,
  moves: Position[],
): void {
  if (!inBounds(row, col)) return;
  const target = board[row][col];
  if (!target || target.color !== color) moves.push({ row, col });
}

function generalMoves(board: Board, pos: Position, color: PlayerColor): Position[] {
  const moves: Position[] = [];
  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (const [dr, dc] of deltas) {
    const row = pos.row + dr;
    const col = pos.col + dc;
    if (!inPalace(row, col, color)) continue;
    pushIfValid(board, color, row, col, moves);
  }
  return moves;
}

function advisorMoves(board: Board, pos: Position, color: PlayerColor): Position[] {
  const moves: Position[] = [];
  const deltas = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  for (const [dr, dc] of deltas) {
    const row = pos.row + dr;
    const col = pos.col + dc;
    if (!inPalace(row, col, color)) continue;
    pushIfValid(board, color, row, col, moves);
  }
  return moves;
}

function elephantMoves(board: Board, pos: Position, color: PlayerColor): Position[] {
  const moves: Position[] = [];
  const deltas = [
    [2, 2],
    [2, -2],
    [-2, 2],
    [-2, -2],
  ];
  for (const [dr, dc] of deltas) {
    const row = pos.row + dr;
    const col = pos.col + dc;
    if (!inBounds(row, col) || !isOwnHalf(row, color)) continue;
    const eyeRow = pos.row + dr / 2;
    const eyeCol = pos.col + dc / 2;
    if (board[eyeRow][eyeCol]) continue;
    pushIfValid(board, color, row, col, moves);
  }
  return moves;
}

const HORSE_OFFSETS: { dr: number; dc: number; leg: { dr: number; dc: number } }[] = [
  { dr: -2, dc: -1, leg: { dr: -1, dc: 0 } },
  { dr: -2, dc: 1, leg: { dr: -1, dc: 0 } },
  { dr: 2, dc: -1, leg: { dr: 1, dc: 0 } },
  { dr: 2, dc: 1, leg: { dr: 1, dc: 0 } },
  { dr: -1, dc: -2, leg: { dr: 0, dc: -1 } },
  { dr: 1, dc: -2, leg: { dr: 0, dc: -1 } },
  { dr: -1, dc: 2, leg: { dr: 0, dc: 1 } },
  { dr: 1, dc: 2, leg: { dr: 0, dc: 1 } },
];

function horseMoves(board: Board, pos: Position, color: PlayerColor): Position[] {
  const moves: Position[] = [];
  for (const { dr, dc, leg } of HORSE_OFFSETS) {
    const row = pos.row + dr;
    const col = pos.col + dc;
    if (!inBounds(row, col)) continue;
    const legRow = pos.row + leg.dr;
    const legCol = pos.col + leg.dc;
    if (board[legRow][legCol]) continue;
    pushIfValid(board, color, row, col, moves);
  }
  return moves;
}

const ORTHOGONAL_DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function chariotMoves(board: Board, pos: Position, color: PlayerColor): Position[] {
  const moves: Position[] = [];
  for (const [dr, dc] of ORTHOGONAL_DIRS) {
    let row = pos.row + dr;
    let col = pos.col + dc;
    while (inBounds(row, col)) {
      const target = board[row][col];
      if (!target) {
        moves.push({ row, col });
      } else {
        if (target.color !== color) moves.push({ row, col });
        break;
      }
      row += dr;
      col += dc;
    }
  }
  return moves;
}

function cannonMoves(board: Board, pos: Position, color: PlayerColor): Position[] {
  const moves: Position[] = [];
  for (const [dr, dc] of ORTHOGONAL_DIRS) {
    let row = pos.row + dr;
    let col = pos.col + dc;
    let screenFound = false;
    while (inBounds(row, col)) {
      const target = board[row][col];
      if (!screenFound) {
        if (!target) {
          moves.push({ row, col });
        } else {
          screenFound = true;
        }
      } else if (target) {
        if (target.color !== color) moves.push({ row, col });
        break;
      }
      row += dr;
      col += dc;
    }
  }
  return moves;
}

function soldierMoves(board: Board, pos: Position, color: PlayerColor): Position[] {
  const moves: Position[] = [];
  const forwardDr = color === "black" ? 1 : -1;
  const crossedRiver = color === "black" ? pos.row >= 5 : pos.row <= 4;
  const candidates: [number, number][] = [[forwardDr, 0]];
  if (crossedRiver) {
    candidates.push([0, -1], [0, 1]);
  }
  for (const [dr, dc] of candidates) {
    const row = pos.row + dr;
    const col = pos.col + dc;
    pushIfValid(board, color, row, col, moves);
  }
  return moves;
}

export function getPseudoMoves(board: Board, pos: Position): Position[] {
  const piece = board[pos.row][pos.col];
  if (!piece) return [];
  switch (piece.type) {
    case "general":
      return generalMoves(board, pos, piece.color);
    case "advisor":
      return advisorMoves(board, pos, piece.color);
    case "elephant":
      return elephantMoves(board, pos, piece.color);
    case "horse":
      return horseMoves(board, pos, piece.color);
    case "chariot":
      return chariotMoves(board, pos, piece.color);
    case "cannon":
      return cannonMoves(board, pos, piece.color);
    case "soldier":
      return soldierMoves(board, pos, piece.color);
    default:
      return [];
  }
}

export function findGeneral(board: Board, color: PlayerColor): Position | null {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const piece = board[row][col];
      if (piece && piece.type === "general" && piece.color === color) {
        return { row, col };
      }
    }
  }
  return null;
}

function isSquareAttacked(board: Board, target: Position, byColor: PlayerColor): boolean {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const piece = board[row][col];
      if (!piece || piece.color !== byColor) continue;
      const moves = getPseudoMoves(board, { row, col });
      if (moves.some((m) => samePos(m, target))) return true;
    }
  }
  return false;
}

export function isInCheck(board: Board, color: PlayerColor): boolean {
  const generalPos = findGeneral(board, color);
  if (!generalPos) return false;
  const enemyColor: PlayerColor = color === "red" ? "black" : "red";

  if (isSquareAttacked(board, generalPos, enemyColor)) return true;

  const enemyGeneralPos = findGeneral(board, enemyColor);
  if (enemyGeneralPos && enemyGeneralPos.col === generalPos.col) {
    const minRow = Math.min(generalPos.row, enemyGeneralPos.row);
    const maxRow = Math.max(generalPos.row, enemyGeneralPos.row);
    let clear = true;
    for (let row = minRow + 1; row < maxRow; row++) {
      if (board[row][generalPos.col]) {
        clear = false;
        break;
      }
    }
    if (clear) return true;
  }

  return false;
}

export function getLegalMoves(board: Board, pos: Position): Position[] {
  const piece = board[pos.row][pos.col];
  if (!piece) return [];
  const pseudo = getPseudoMoves(board, pos);
  return pseudo.filter((dest) => {
    const next = cloneBoard(board);
    next[dest.row][dest.col] = piece;
    next[pos.row][pos.col] = null;
    return !isInCheck(next, piece.color);
  });
}

export function hasAnyLegalMove(board: Board, color: PlayerColor): boolean {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const piece = board[row][col];
      if (piece && piece.color === color) {
        if (getLegalMoves(board, { row, col }).length > 0) return true;
      }
    }
  }
  return false;
}

export function otherColor(color: PlayerColor): PlayerColor {
  return color === "red" ? "black" : "red";
}
