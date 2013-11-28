/*
 * Contains methods which bind everything together.
 */

angular.module('circuitApp.controllers', []).
    controller('WorkspaceCtrl', [ '$scope', 'sessionService', 'angularFire',
        function ($scope, sessionService, angularFire) {
            var id = sessionService.getSessionId();

            angularFire(sessionService.circuitRef, $scope, 'data');

            d3.select("#workspace-container").on("click", deselectComponent);

            function clearCircuit() {
                $scope.data = {};
            }

            $scope.removeComponent = removeComponent;
            $scope.addComponent = addComponent;
            $scope.selectPin = selectPin;

            $scope.evaluateCircuit = function() {
                var output = circuits.js.evaluate(data);
                console.log(output.result);
                $scope.data = output.state;
            }

        }])

function isDefined(x) {
    return typeof x !== "undefined" && x !== null;
}

function removeComponent() {
    if (isDefined($scope.selectedComponent)) {
        $scope.data = circuits.js.remove_component($scope.selectedComponent, $scope.data);
    }
}

