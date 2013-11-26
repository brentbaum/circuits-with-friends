var data = {};
var circuitRef = new Firebase('https://circuitswithfriends.firebaseIO.com/circuits');
var workspace = d3.select("#workspace");

setup();

$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
}

function setup() {
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

