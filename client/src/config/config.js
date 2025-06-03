import { io } from "socket.io-client";

const URL = "http://localhost:5001";
// const URL = "https://video-call-server-gm7i.onrender.com";

export const socket = io(URL);
export const navbarBrand = "YourVideoShare";
