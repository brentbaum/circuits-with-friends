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
                $scope.data = {};
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
                if (sessionService.selectedComponent != -1) {
                    $scope.data = circuits.js.remove_component(sessionService.selectedComponent, $scope.data);
                }
            }


            $scope.selectPin = selectPin;

            $scope.evaluateCircuit = function() {
                var output = circuits.js.evaluate(data);
                console.log(output.result);
                $scope.data = output.state;
            }

            $scope.speciesList = ['inputpin', 'outputpin', 'notgate', 'andgate', 'orgate', 'nandgate', 'norgate', 'xorgate', 'xnorgate', 'mux', 'dflipflop', 'tflipflop', 'decoder', 'register'];
        }])

function isDefined(x) {
    return typeof x !== "undefined" && x !== null;
}