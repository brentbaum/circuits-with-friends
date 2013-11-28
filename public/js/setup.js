angular.module('circuitRef.services', [])
    .factory('sessionService', function() {
        var sService = {}

        sService.getSessionId = function() {
            if(!sService.id) {
                sService.createSession();
            }
            return sService.id;
        };

        sService.createSession = function() {
            var id = window.location.hash;
            if (id === "")
                id = randString(5);
            else
                id = id.substring(1);
            window.history.pushState("", "Circuits with Friends", "/#" + id);
            sService.id = id;
        }

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
