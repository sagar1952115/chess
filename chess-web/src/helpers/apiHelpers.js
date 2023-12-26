import { io } from "socket.io-client";

// export const url = "https://chess-web-backend.onrender.com";
export const url = "http://localhost:3001";

export const socket = io.connect(url);
