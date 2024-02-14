const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {

  socket.on('chat message', (msg) => {
    console.log('Message received: ' + msg);
    // emit message
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnect');
  });


});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});