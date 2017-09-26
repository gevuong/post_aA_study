document.addEventListener('DOMContentLoaded', () => {
  const socket = require('socket.io-client')() // invoked with ()
  console.log(socket);
  // const ChatUI = require('./chatUI')
  // const myChat = new ChatUI(socket)
})
// const express = require('../../node_modules/express');
// // const app = express();
// // const fs = require('fs');
// // const server = require('http').createServer(app);
// const io = require('socket.io')(server); // need to pass http Server instance to socket.io
// // io.on('connection', function() {
// //
// // });
// // server.listen(4000); // call listen on server, not the app.
