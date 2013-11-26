var data = {};
var circuitRef, chatRef;
var workspace = d3.select("#workspace");

setup();

function setup() {
    var id = window.location.hash;
    if(id === "")
        id = randString(5);
    else
        id = id.substring(1);
    window.history.pushState("", "Circuits with Friends", "/#"+id);
    circuitRef = new Firebase('https://circuitswithfriends.firebaseIO.com/' + id + '/circuits');
    chatRef = new Firebase('https://circuitswithfriends.firebaseIO.com/' + id + '/chat');
    circuitRef.on('value', function (snapshot) {
        data = snapshot.val();
        if (!data) {
            data = {};
        }
        else
            draw();
    });
    d3.select("#workspace-container").on("mouseup", function () {
        circuitRef.set(data);
    });
    d3.select("#workspace-container").on("click", deselectComponent);
}


function urlParam(name){
    console.log(window.location.href);
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
}

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
