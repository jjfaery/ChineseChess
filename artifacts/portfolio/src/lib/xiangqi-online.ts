import type { PlayerColor, Position } from "@/lib/xiangqi-engine";

export type ClientMessage =
  | { type: "move"; from: Position; to: Position }
  | { type: "reset" };

export type ServerMessage =
  | { type: "assigned"; color: PlayerColor; roomId: string }
  | { type: "opponent-status"; connected: boolean }
  | { type: "move"; from: Position; to: Position }
  | { type: "reset" }
  | { type: "error"; reason: "room-full" };

export function createRoomId(): string {
  return crypto.randomUUID();
}

function resolveWsUrl(roomId: string): string {
  const explicitBase = import.meta.env.VITE_XIANGQI_WS_URL as string | undefined;
  const base =
    explicitBase?.replace(/\/+$/, "") ??
    `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}/api/xiangqi/ws`;

  return `${base}?room=${encodeURIComponent(roomId)}`;
}

interface RoomConnectionHandlers {
  onMessage: (message: ServerMessage) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onError?: () => void;
}

export interface RoomConnection {
  send: (message: ClientMessage) => void;
  close: () => void;
}

export function connectToRoom(roomId: string, handlers: RoomConnectionHandlers): RoomConnection {
  const socket = new WebSocket(resolveWsUrl(roomId));

  socket.onopen = () => handlers.onOpen?.();
  socket.onclose = () => handlers.onClose?.();
  socket.onerror = () => handlers.onError?.();
  socket.onmessage = (event) => {
    try {
      const parsed = JSON.parse(event.data) as ServerMessage;
      handlers.onMessage(parsed);
    } catch {
      // ignore malformed messages
    }
  };

  return {
    send(message) {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
      }
    },
    close() {
      socket.onopen = null;
      socket.onclose = null;
      socket.onerror = null;
      socket.onmessage = null;
      socket.close();
    },
  };
}
