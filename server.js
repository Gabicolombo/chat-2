const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

let users = [];

io.on('connection', socket => {

  
  socket.on('chat message', (msg, user) => {
    console.log('Message received: ' + msg + user);
    // emit message
    io.emit('chat message', msg, user);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnect');
  });

  socket.on('new_user', (user) => {
    console.log('New User entered: ' + user);
    users.push(user);

    console.log(users);
  });

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});