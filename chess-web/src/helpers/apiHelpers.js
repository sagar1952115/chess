import { io } from "socket.io-client";

export const url = "https://chess-backend-115.onrender.com/";
// export const url = "http://localhost:3001";

export const socket = io.connect(url);
