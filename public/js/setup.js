angular.module('circuitRef.services', [])
    .factory('sessionService', function() {
        var sService = {}

        sService.createId = randString;

        //factory function body that constructs shinyNewServiceInstance
        return sService;
    });

function randString(n)
{
    if(!n)
    {
        n = 5;
    }

    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(var i=0; i < n; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
