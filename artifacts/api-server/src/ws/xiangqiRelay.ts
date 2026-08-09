import type { Server as HttpServer } from "node:http";
import { WebSocketServer, WebSocket } from "ws";
import { logger } from "../lib/logger";

const RELAY_PATH = "/api/xiangqi/ws";

type PlayerColor = "red" | "black";

interface Room {
  red?: WebSocket;
  black?: WebSocket;
}

const rooms = new Map<string, Room>();

function otherColor(color: PlayerColor): PlayerColor {
  return color === "red" ? "black" : "red";
}

function send(socket: WebSocket, message: unknown): void {
  if (socket.readyState !== WebSocket.OPEN) return;
  socket.send(JSON.stringify(message));
}

function claimSlot(room: Room, socket: WebSocket): PlayerColor | null {
  if (!room.red) {
    room.red = socket;
    return "red";
  }
  if (!room.black) {
    room.black = socket;
    return "black";
  }
  return null;
}

function releaseSlot(room: Room, color: PlayerColor, socket: WebSocket): void {
  if (room[color] === socket) {
    delete room[color];
  }
}

export function attachXiangqiRelay(server: HttpServer): void {
  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (req, socket, head) => {
    const url = new URL(req.url ?? "", "http://localhost");
    if (url.pathname !== RELAY_PATH) return;

    const roomId = url.searchParams.get("room");
    if (!roomId) {
      socket.destroy();
      return;
    }

    wss.handleUpgrade(req, socket, head, (ws) => {
      handleConnection(ws, roomId);
    });
  });
}

function handleConnection(ws: WebSocket, roomId: string): void {
  const room = rooms.get(roomId) ?? {};
  rooms.set(roomId, room);

  const color = claimSlot(room, ws);
  if (!color) {
    send(ws, { type: "error", reason: "room-full" });
    ws.close();
    return;
  }

  logger.info({ roomId, color }, "xiangqi player joined room");

  send(ws, { type: "assigned", color, roomId });

  const peer = room[otherColor(color)];
  if (peer) {
    send(peer, { type: "opponent-status", connected: true });
    send(ws, { type: "opponent-status", connected: true });
  }

  ws.on("message", (data) => {
    const peerSocket = room[otherColor(color)];
    if (!peerSocket) return;

    let parsed: unknown;
    try {
      parsed = JSON.parse(data.toString());
    } catch {
      return;
    }

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "type" in parsed &&
      (parsed.type === "move" || parsed.type === "reset")
    ) {
      send(peerSocket, parsed);
    }
  });

  ws.on("close", () => {
    releaseSlot(room, color, ws);
    logger.info({ roomId, color }, "xiangqi player left room");

    const peerSocket = room[otherColor(color)];
    if (peerSocket) {
      send(peerSocket, { type: "opponent-status", connected: false });
    } else {
      rooms.delete(roomId);
    }
  });
}
