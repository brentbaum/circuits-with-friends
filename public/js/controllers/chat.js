angular.module('circuitApp.controllers').
    controller('ChatCtrl', [ '$scope', 'sessionService', 'angularFire',
        function($scope, sessionService, angularFire) {
            $scope.messages = [];
            $scope.name = "Guest";
            $scope.text = "";
            angularFire(sessionService.chatRef, $scope, 'messages');
            $('#messageInput').keypress(function (e) {
                if (e.keyCode == 13) {
                    $scope.messages.push({name: $scope.name, text: $scope.text});
                    $scope.text = "";
                    $scope.$apply();
                }
            });

        }]);