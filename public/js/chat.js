var chatRef;
$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        chatRef.push({name: name, text: text});
        $('#messageInput').val('');
    }
});
chatRef.on('child_added', function (snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
});
function displayChatMessage(name, text) {
    $('<div/>').text(text).prepend($('<em/>').text(name + ': ')).appendTo($('#chat'));
    $('#chat')[0].scrollTop = $('#chat')[0].scrollHeight;
}