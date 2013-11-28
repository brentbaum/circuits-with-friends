'use strict';


angular.module('circuitApp', [
        'firebase',
        'circuitApp.services',
        'circuitApp.directives',
        'circuitApp.controllers',
        'd3'
    ]);

angular.module('circuitApp.directives', ['d3'])
    .directive('component', ['d3Service', function(d3Service) {
        return {
            restrict: 'EA',
            scope: {
                data: '=',
                label: '@',
                onClick: '&'
            },
            link: function(scope, element, attrs) {
                d3Service.d3().then(function(d3) {

                });
            }};
    }]);