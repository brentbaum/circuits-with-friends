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
                    {},
                    {}
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
}
var width = 500;
var height = 500;

setup();

function drawComponents() {
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
}

function clearCanvas() {
    removeComponent("rect");
    removeComponent("circle");
    removeComponent("line");
}

function removeComponent(type) {
    d3.select("#workspace")
        .selectAll(type)
        .remove();
}

function drawLines() {
    var links = makeLinks();

    var connection = d3.select("#workspace")
        .selectAll("line.link")
        .data(links);

    line(connection);
}

function line(container) {
    return container.append("svg:line")
        .attr("x1", function(d) {return d.x1;})
        .attr("y1", function(d) {return d.y1;})
        .attr("x2", function(d) {return d.x2;})
        .attr("y2", function(d) {return d.y2;});
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
    drawPins();
};

function makeLinks() {
    var links = [];
    d3.values(data).forEach(function (target) {
        d3.values(target.inputs).forEach(function (input) {
            input.connections.forEach(function(pin) {
                if(!!pin.source) {
                    var source = data[pin["source-id"]];
                    links.push({
                            x1: target.display.x + target.display.size/2, y1: target.display.y + target.display.size/2,
                            x2: source.display.x + source.display.size/2, y2: source.display.y + source.display.size/2
                    });
                }
            });
        })
    });
    return links;
}

function draw() {
    clearCanvas();
    drawComponents();
    drawLinks();
    drawPins();
}

function drawLinks() {
    var c1 = connection.enter()
        .append("svg:circle")
        .attr("r", 3)
        .attr("cx", function(d) {return d.x1;})
        .attr("cy", function(d) {return d.y1;})

    var c2 = connection.enter()
        .append("svg:circle")
        .attr("r", 3)
        .attr("cx", function(d) {return d.x2;})
        .attr("cy", function(d) {return d.y2;})
}

function makePins() {
    return d3.values(data).map(function(component) {
        return makeComponentPins(component);
    });
}

function drawPins() {
    var pinTrist = makePins();
    pinTrist.forEach(function(pins) {
        var p = d3.select("#workspace")
            .selectAll("g.p")
            .data(pins)
            .enter().append("svg:g");
        line(p).classed("pin", true)
            .classed("connected", function(d) {
                return !!d["source-id"];
            });
    })
}

function makeComponentPins(component) {
    var len = 5;
    var pins;
    if(component.species == "mux")
        pins = makeMuxPins(component);
    if(component.species == "ip")
        pins = makeIpPins(component);
    if(component.species == "flipflop")
        pins = makeFlipFlopPins(component);

    var leftDistance = component.display.size / (pins.left.length * 2 );
    for(var index = 0; index < pins.left.length; index++) {
        pins.left[index].y1 = pins.left[index].y2 = component.display.y + leftDistance * (2 * index + 1);
        pins.left[index].x1 = component.display.x-len;
        pins.left[index].x2 = component.display.x+len;
        pins.left[index].parent = component.id;
    }

    var botDistance = component.display.size / (pins.bottom.length * 2);
    for(var index = 0; index < pins.bottom.length; index++) {
        pins.bottom[index].x1 = pins.bottom[index].x2 = component.display.x + botDistance * (2 * index + 1);
        pins.bottom[index].y2 = component.display.y + component.display.size - len;
        pins.bottom[index].y1 = pins.bottom[index].y2 + 2*len;
        pins.bottom[index].parent = component.id;
    }

    var rightDistance = component.display.size / (pins.right.length * 2);
    for(var index = 0; index < pins.right.length; index++) {
        pins.right[index].y1 = pins.right[index].y2 = component.display.y + rightDistance * (2 * index + 1);
        pins.right[index].x2 = component.display.x + component.display.size - len;
        pins.right[index].x1 = pins.right[index].x2 + 2*len;
        pins.right[index].parent = component.id;
    }

    return Object.keys(pins).reduce(function(array, side) {
        return array.concat(pins[side]);
    }, []);
}

function makeMuxPins(mux) {
    return {left: mux.inputs.data.connections, bottom: mux.inputs.control.connections, right: [mux.outputs.q]};
}

function makeIpPins(ip) {
    return {left: [], bottom: [], right: [ip.outputs.q]};
};

function makeFlipFlopPins(ff) {
    var r = [ff.outputs.q,ff.outputs.qbar];
    r[0].type = "q";
    r[1].type = "qbar";
    return {left: ff.inputs.data.connections, bottom: ff.inputs.enable.connections, right: r};
};

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
    drawPins();
    //circuitRef.set(data);
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
    //var circuitRef = new Firebase('https://circuitswithfriends.firebaseIO.com/');
    /*circuitRef.on('value', function(snapshot) {
    //console.log(snapshot.val());
        data = snapshot.val();
        if(!data) {
            data = {};
        }
        drawComponents();
        drawLines();
        drawPins();
    });*/
    /*d3.select("#workspace-container").on("mouseup", function() {
       circuitRef.set(data);
    });*/
    d3.select("#workspace-container").on("click", function() {
        if(currentSelection != -1) {
            d3.select(".selected").classed("selected", false);
            currentSelection = -1;
        }
    });
    drawComponents();
    drawLines();
    drawPins();
}

