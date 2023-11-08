require('dotenv').config();
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
    "backendSupport": [],
    "frontendSupport": [],
    "qaSupport": [],
};
const clientRooms = {};



wss.on('connection', (ws) => {
  console.log('Client connected');
  let currentRoom = null;

  ws.send(JSON.stringify({ type: 'roomList', rooms: predefinedRooms }));

  ws.on('message', (data) => {
    const message = JSON.parse(data);

    if (message.type === 'joinRoom') {
      if (predefinedRooms.includes(message.room)) {
        currentRoom = message.room;
        clientRooms[ws] = currentRoom;

        ws.send(JSON.stringify({
          type: 'history',
          messages: messageHistory[currentRoom].slice(-10)
        }));
      } else {
        ws.send(JSON.stringify({ type: 'error', message: 'Invalid room' }));
      }
    } else if (message.type === 'message') {
      if (!message.name || message.name.trim() === '' || !message.text || message.text.trim() === '' || message.text.length > 255) {
        ws.send(JSON.stringify({ type: 'error', message: 'Invalid message' }));
        return;
      }

      const messageToSend = {
        name: message.name,
        text: message.text,
        room: currentRoom,
        type: 'message'
      };

      messageHistory[currentRoom].push(messageToSend);
      wss.clients.forEach(client => {
        if (client !== ws && clientRooms[client] === currentRoom && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(messageToSend));
        }
      });
    }
  });

  ws.on('close', () => {
    delete clientRooms[ws];
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));