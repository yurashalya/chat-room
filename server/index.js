require("dotenv").config();
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const predefinedRooms = ["backendSupport", "frontendSupport", "qaSupport"];
const messageHistory = {
  backendSupport: [],
  frontendSupport: [],
  qaSupport: [],
};

const clientRooms = new Map();

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const message = JSON.parse(data);

    if (message.type === "joinRoom") {
      const room = message.room;

      if (predefinedRooms.includes(room)) {
        clientRooms.set(ws, room);

        ws.send(
          JSON.stringify({
            type: "history",
            room: room,
            messages: messageHistory[room].slice(-10) || messageHistory,
          })
        );
      } else {
        ws.send(JSON.stringify({ type: "error", message: "Invalid room" }));
      }
    } else if (message.type === "message") {
      const room = clientRooms.get(ws);

      if (
        room &&
        message.name &&
        message.name.trim() !== "" &&
        message.message &&
        message.message.trim() !== "" &&
        message.message.length <= 255
      ) {
        const messageToSend = {
          name: message.name,
          message: message.message,
          room: room,
          type: "message",
        };

        messageHistory[room].push(messageToSend);

        broadcastMessage(room, messageToSend);
      } else {
        ws.send(
          JSON.stringify({
            type: "error",
            message: "Invalid message or no room joined",
          })
        );
      }
    }
  });

  ws.on("close", () => {
    clientRooms.delete(ws);
  });
});

function broadcastMessage(room, message) {
  wss.clients.forEach((client) => {
    if (
      clientRooms.get(client) === room &&
      client.readyState === WebSocket.OPEN
    ) {
      client.send(JSON.stringify(message));
    }
  });
}

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
