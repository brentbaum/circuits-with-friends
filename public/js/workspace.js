/*
 * Contains methods which bind everything together.
 */

var data = {};
var circuitRef = new Firebase('https://circuitswithfriends.firebaseIO.com/circuits');

setup();

function evaluateCircuit() {
    alert(circuits.js.evaluate("outputpin1", data));
}

function isDefined(x) {
    return typeof x !== "undefined" && x !== null;
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
    d3.select("#workspace-container").on("click", checkDeselect);
}

