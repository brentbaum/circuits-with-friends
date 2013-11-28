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

            $scope.selectedComponent = null;

            function removeComponent() {
                console.log("selection", $scope.selectedComponent);
                if (isDefined($scope.selectedComponent)) {
                    $scope.data = circuits.js.remove_component(selectedComponent, data);
                }
            }

            $scope.evaluateCircuit = function() {
                var output = circuits.js.evaluate(data);
                console.log(output.result);
                $scope.data = output.state;
            }
        }])

function isDefined(x) {
    return typeof x !== "undefined" && x !== null;
}

