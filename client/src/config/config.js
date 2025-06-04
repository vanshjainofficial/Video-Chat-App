import { io } from "socket.io-client";

const URL = "https://video-chat-app-w0gr.onrender.com";
// const URL = "https://video-call-server-gm7i.onrender.com";

export const socket = io(URL);
export const navbarBrand = "Vansh's Video Chat App";
