var data = {}/*s
var data = {
    1: {
        id: 1,
        species: "mux",
        display: {x: 250, y: 150, size: 50},
        outputs: {
            q: {wordLength : 1, "num-pins": 2}
        },
        state: {},
        inputs: {
            data: {
                "num-inputs": 4,
                "word-length": 1,
                connections: [
                    {"source-id": 2, "source-field": "q"},
                    {"source-id": 2, "source-field": "q"},
                    {"source-id": 2, "source-field": "q"},
                    {"source-id": 2, "source-field": "q"}
                ]
            },
            control: {
                "num-inputs": 1,
                "word-length": 2,
                connections: [
                    {"source-id": 3, "source-field": "q"}
                ]

            }
        }
    },

    2: {
        id: 2,
        display: {x: 150, y: 150, size: 50},
        species: "ip",
        outputs: {
            q: {"word-length": 1, "num-pins":1}
        },
        state: {
            data: [true]
        }
    },
    3: {
        id: 3,
        species: "flipflop",
        display: {x: 350, y: 150, size: 50},
        outputs: {
            q: {"word-length": 1, "num-pins": 1},
            qbar: {"word-length": 1, "num-pins": 1}
        },
        inputs: {
            data: {
                "num-inputs" : 4,
                "word-length": 1,
                connections: [
                    {"source-id": 1, "source-field": "zero?"}
                ]
            },
            enable: {
                "num-inputs": 1,
                "word-length": 1,
                connections: [
                    {"source-id":2, "source-field": "q"}
                ]
            }
        },
        state: {
            data: [false]
        }
    }
}*/
var width = 500;
var height = 500;

setup();

function drawComponents() {
    removeComponent("rect");

    var component = d3.select("#workspace")
        .selectAll("g.component")
        .data(d3.values(data))
        .enter().append("svg:g");

    component.append("svg:rect").attr("class", "component")
        .attr("width", function(d) {return d.display.size})
        .attr("height", function(d) {return d.display.size})
        .attr("x", function(d) {return d.display.x})
        .attr("y", function(d) {return d.display.y})
        .call(d3.behavior.drag().on("drag", move))
        .on("click", selectComponent);

    /*component.data(function(d) {
        if(d.type == "mux")
            return muxPins(d);
    })*/
}

function muxPins(mux) {
    pins = {left: [], bottom: []};
    mux.data(function(d) {
        dataPins = d.inputs.data;
        for(var x = 0; x < dataPins.length; x++) {
            pins.left.push(dataPins[x]);
        }
    });
}

function removeComponent(type) {
    d3.select("#workspace")
        .selectAll(type)
        .remove();
}

function drawLines() {
    var links = makeLinks();

    removeComponent("circle");
    removeComponent("line");

    var connection = d3.select("#workspace")
        .selectAll("line.link")
        .data(links);

    line(connection);

    var c1 = connection.enter()
        .append("svg:circle")
        .attr("r", 3)
        .attr("cx", function(d) {return d[0].x;})
        .attr("cy", function(d) {return d[0].y;})

    var c2 = connection.enter()
        .append("svg:circle")
        .attr("r", 3)
        .attr("cx", function(d) {return d[1].x;})
        .attr("cy", function(d) {return d[1].y;})
}

function line(container) {
    container.append("svg:line")
        .attr("x1", function(d) {return d[0].x;})
        .attr("y1", function(d) {return d[0].y;})
        .attr("x2", function(d) {return d[1].x;})
        .attr("y2", function(d) {return d[1].y;});
}

function move(){
    this.parentNode.appendChild(this);
    var dragTarget = d3.select(this);

    var newX = d3.event.dx + parseInt(dragTarget.attr("x"));
    var newY = d3.event.dy + parseInt(dragTarget.attr("y"));

    dragTarget
        .attr("x", function(){return newX})
        .attr("y", function(){return newY})

    this.__data__.display.x = newX;
    this.__data__.display.y = newY;

    drawLines();
};

function makeLinks() {
    var links = [];
    d3.values(data).forEach(function (target) {
        d3.values(target.inputs).forEach(function (input) {
            input.connections.forEach(function(pin) {
                var source = data[pin["source-id"]];
                links.push(
                    [
                        {x: target.display.x + target.display.size/2, y: target.display.y + target.display.size/2},
                        {x: source.display.x + source.display.size/2, y: source.display.y + source.display.size/2}
                    ]);
            });
        })
    });
    return links;
}

var lastConnected = 3;

function addComponent() {
    var current = lastConnected + 1;
    data[current] =  {
        id: 2,
        display: {x: 150, y: 150, size: 50},
        species: "ip",
        outputs: {
            q: {"word-length": 1, "num-pins":1}
        },
        state: {
            data: [true]
        }
    };

    lastConnected = current;

    drawComponents();
    drawLines();
    circuitRef.set(data);
}

var currentSelection;

function selectComponent() {
    this.parentNode.appendChild(this);
    var selectTarget = d3.select(this);

    setTimeout(function() {
       console.log("Triggered!");

        selectTarget.classed("selected", true);

        currentSelection = selectTarget.id;
    }, 10);
}

function setup() {
    var circuitRef = new Firebase('https://circuitswithfriends.firebaseIO.com/');
    circuitRef.on('value', function(snapshot) {
    //console.log(snapshot.val());
        data = snapshot.val();
        if(!data) {
            data = {};
        }
        drawComponents();
        drawLines();
    });
    d3.select("#workspace-container").on("mouseup", function() {
       circuitRef.set(data);
    });
    d3.select("#workspace-container").on("click", function() {
        if(currentSelection != -1) {
            d3.select(".selected").classed("selected", false);
            currentSelection = -1;
        }
    });
}

//Spec

