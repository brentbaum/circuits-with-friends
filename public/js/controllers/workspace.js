/*
 * Contains methods which bind everything together.
 */

angular.module('circuitApp.controllers', []).
    controller('WorkspaceCtrl', [ '$scope', 'sessionService', 'angularFire', 'd3',
        function ($scope, sessionService, angularFire, d3) {

            $scope.data = sessionService.data;
            angularFire(sessionService.circuitRef, $scope, 'data');

            $scope.$watch(function() {return sessionService.data;}, function(d) {
                $scope.data = d;
            })

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
                sessionService.data = circuits.js.add_component(species, sessionService.data, display)
            }

            $scope.removeComponent = function() {
                if (sessionService.selectedComponent != -1) {
                    sessionService.data = circuits.js.remove_component(sessionService.selectedComponent, sessionService.data);
                }
            }

            $scope.evaluateCircuit = function() {
                var output = circuits.js.evaluate(sessionService.data);
                console.log(output.result);
                sessionService.data = output.state;
            }

            $scope.speciesList = ['inputpin', 'outputpin', 'notgate', 'andgate', 'orgate', 'nandgate', 'norgate', 'xorgate', 'xnorgate', 'mux', 'dflipflop', 'tflipflop', 'decoder', 'register'];
        }])

function isDefined(x) {
    return typeof x !== "undefined" && x !== null;
}