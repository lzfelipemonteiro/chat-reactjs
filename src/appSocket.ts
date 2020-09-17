import io from 'socket.io-client';

export const appSocket = io('https://chat-jeffersontpadua.herokuapp.com/', {
  secure: true
})