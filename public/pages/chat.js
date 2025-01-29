$(document).ready(function(){
  let socket = io();

  let user = Cookies.get('username');

  $('#sendMessageBtn').click(function(){
      let message = $('#messageInput').val();
      console.log(`sending message from ${user}`);
      socket.emit('chat message', message, user);
      $('#messageInput').val('');
  });

  socket.on('chat message', function(msg, user){
    let messageClass = (user === Cookies.get('username')) ? 'message-user' : 'message-other';
    $('#messages').append($('<p>').addClass(messageClass).text(`${user} - ${msg}`));
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
});
});