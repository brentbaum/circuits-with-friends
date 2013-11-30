angular.module('circuitApp.services')
    .factory('calculateService', function() {
    var cService = {};
    cService.makeLinks = makeLinks;
    cService.makePins = makePins;
    return cService;
});