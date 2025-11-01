import { io } from 'socket.io-client';

let socket = null;

export function getSocket() {
  const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const token = (typeof window !== 'undefined') ? localStorage.getItem('access_token') : null;

  if (!socket) {
    socket = io(url, {
      transports: ['websocket'],
      withCredentials: true,
      auth: token ? { token } : undefined,
    });
  } else {
    // Обновляем токен для последующих реконнектов
    if (token) socket.auth = { token };
  }
  return socket;
}

export function registerSocket(userId) {
  const s = getSocket();
  if (userId) s.emit('register', userId);
  return s;
}
