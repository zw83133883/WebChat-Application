var http = require("http");
var express = require("express");
var cors = require("cors");
var io = require("socket.io");
var config = require("./config.json");

// setup server
const app = express();
const server = http.createServer(app);

const socketIo = io(server);

// Allow CORS
app.use(cors());

// Start listening
server.listen(process.env.PORT || config.port);
console.log(`Started on port ${config.port}`);

// Setup socket.io
socketIo.on('connection', socket => {
  const username = socket.handshake.query.username;
  console.log(`${username} connected`);

  socket.on('client:message', data => {
    console.log(`${data.username}: ${data.message}`);

    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit('server:message', data);
  });

  socket.on('disconnect', () => {
    console.log(`${username} disconnected`);
  });
});