angular.module('circuitApp.services')
    .factory('calculateService', ['d3', function(d3) {
    var cService = {};
    cService.makeLinks = makeLinks;
    cService.makePins = makePins;
    return cService;
}]);