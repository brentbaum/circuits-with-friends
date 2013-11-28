angular.module('circuitApp.controllers', []).
    controller('ChatCtrl', [ '$scope', 'sessionService', 'angularFire',
        function($scope, sessionService, angularFire) {

            $scope.messages = [];
            var chatRef = new Firebase('https://circuitswithfriends.firebaseIO.com/' + sessionService.id + '/chat');
            angularFire(chatRef, $scope, 'messages');

        }]);
$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        chatRef.push({name: name, text: text});
        $('#messageInput').val('');
    }
});