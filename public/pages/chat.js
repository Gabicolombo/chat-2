$(document).ready(function(){
  let socket = io();

  $('#sendMessageBtn').click(function(){
      let message = $('#messageInput').val();
      socket.emit('chat message', message);
      $('#messageInput').val('');
  });

  socket.on('chat message', function(msg){
      $('#messages').append($('<p>').text(msg));
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
  });
});