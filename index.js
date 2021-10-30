const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
require('dotenv').config();
const { Server } = require('socket.io');
const io = new Server(server);
const { v4 } = require('uuid');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('create room', () => {
    const roomNumber = v4();
    socket.join(roomNumber);
    socket.emit('get room', roomNumber);
  });

  socket.on('join room', (roomNumber) => {
    socket.join(roomNumber);
    socket.emit('get room', roomNumber);
    socket.to(roomNumber).emit('join room');
  });
});

server.listen(process.env.port, () => {
  console.log(`listening on http://localhost:${process.env.port}`);
});
