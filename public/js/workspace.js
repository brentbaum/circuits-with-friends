/*
 * Contains methods which bind everything together.
 */

angular.module('circuitApp.controllers', []).
    controller('WorkspaceCtrl', [ '$scope', 'sessionService', 'angularFire', 'd3',
        function ($scope, sessionService, angularFire, d3) {

            $scope.data = sessionService.data;

            $scope.$watch('data', function(d) {
                console.log(d);
                sessionService.data = d;
            });

            angularFire(sessionService.circuitRef, $scope, 'data');


            d3.select("#workspace-container").on("click", deselectComponent);

            function clearCircuit() {
                sessionService.data = {};
            }

            $scope.addComponent = function(species) {
                var size = 60;
                if (species === 'inputpin' || species === 'outputpin') {
                    size = 35;
                }
                var display = {
                    x: 25,
                    y: 25,
                    size: size
                }
                $scope.data = circuits.js.add_component(species, sessionService.data, display)
            }

            $scope.removeComponent = function() {
                if (isDefined($scope.selectedComponent)) {
                    $scope.data = circuits.js.remove_component($scope.selectedComponent, $scope.data);
                }
            }


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