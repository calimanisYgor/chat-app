import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`User connected ${socket.id}`);
    socket.on('message', (message) => {
        console.log(`Message: ${message}`);
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected ${socket.id}`);
    });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


