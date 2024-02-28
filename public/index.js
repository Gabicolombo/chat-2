let socket = io();
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault() // para não enviar o forms antes;

    let name_user = document.getElementById('username').value;
    console.log(name_user);

    socket.emit('new_user', name_user);
  });

document.getElementById('signupButton').addEventListener('click', function(event){
  event.preventDefault();

  window.location.href = './pages/chat.html';
});


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