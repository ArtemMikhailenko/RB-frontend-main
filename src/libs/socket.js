import { io } from 'socket.io-client';

let socket = null;

export function getSocket() {
  if (socket) return socket;
  const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  socket = io(url, {
    transports: ['websocket'],
  });
  return socket;
}

export function registerSocket(userId) {
  const s = getSocket();
  if (userId) s.emit('register', userId);
  return s;
}
