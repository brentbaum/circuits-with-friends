var data = {};

setup();

function draw() {
    clearCanvas();
    drawComponents();
    var pins = makePins();
    var links = makeLinks(pins);
    drawPins(pins);
    drawLinks(links);
    if (selectedPin)
        circle(selectedPin);
}

function clearCanvas() {
    removeComponent("g");
    removeComponent("rect");
    removeComponent("circle");
    removeComponent("line");
}
function drawComponents() {
    removeComponent("image");

    var component = d3.select("#workspace")
        .selectAll("g.component")
        .data(d3.values(data))
        .enter().append("svg:g");

    var svgMap = {
        "notgate": "../svg/default/00-not.svg",
        "andgate": "../svg/default/01-and.svg",
        "orgate": "../svg/default/02-or.svg",
        "nandgate": "../svg/default/03-nand.svg",
        "norgate": "../svg/default/04-nor.svg",
        "xorgate": "../svg/default/05-xor.svg",
        "xnorgate": "../svg/default/06-xnor.svg",
        "mux": "../svg/default/07-mux.svg",
        "dflipflop": "../svg/default/08-dff.svg",
        "tflipflop": "../svg/default/09-tff.svg",
        "decoder": "../svg/default/10-decoder.svg",
        "register": "../svg/default/11-register.svg"
    };

    component.append("svg:image")
        .attr("xlink:href", function (d) {
            return svgMap[d.species]
        })
        .attr("width", function (d) {
            return d.display.size;
        })
        .attr("height", function (d) {
            return d.display.size;
        })
        .attr("x", function (d) {
            return d.display.x;
        })
        .attr("y", function (d) {
            return d.display.y;
        })
        .call(d3.behavior.drag().on("drag", move))
        .on("click", selectComponent);
}

function removeComponent(type) {
    d3.select("#workspace")
        .selectAll(type)
        .remove();
}

function move() {
    this.parentNode.appendChild(this);
    var dragTarget = d3.select(this);

    var newX = d3.event.dx + parseInt(dragTarget.attr("x"));
    var newY = d3.event.dy + parseInt(dragTarget.attr("y"));

    dragTarget
        .attr("x", function () {
            return newX
        })
        .attr("y", function () {
            return newY
        })

    this.__data__.display.x = newX;
    this.__data__.display.y = newY;

    removeComponent("line");
    removeComponent("circle");
    var pins = makePins();
    var links = makeLinks(pins);
    drawLinks(links);
    drawPins(pins);
};

function makeLinks(pins) {
    var links = [];
    pins.forEach(function (pin) {
        if (!!pin["source-id"]) {
            var source = findSource(pins, pin["source-id"], pin["source-field"])
            links.push({
                x1: pin.x1, y1: pin.y1, target: pin,
                y2: source.y1, x2: source.x1, source: source
            })
        }
    })
    return links;
}

function findSource(pins, id, field) {
    var result;
    pins.forEach(function (pin) {
        if (!!pin.field && pin.parent === id && pin.field === field)
            result = pin;
    })
    return result;
}

function drawLinks(links) {
    var connection = d3.select("#workspace")
        .selectAll("line.link")
        .data(links).enter();

    line(connection);

    var c1 = connection
        .append("svg:circle")
        .attr("r", 2.5)
        .attr("cx", function (d) {
            return d.target.x1;
        })
        .attr("cy", function (d) {
            return d.target.y1;
        })

    var c2 = connection
        .append("svg:circle")
        .attr("r", 2.5)
        .attr("cx", function (d) {
            return d.source.x1;
        })
        .attr("cy", function (d) {
            return d.source.y1;
        })

}

var selectedPin;

function selectPin(pin) {
    if(!!selectedPin && pin.parent === selectedPin.parent && pin.field === selectedPin.field) {
        selectedPin = null;
    }
    else if (!selectedPin) {
        selectedPin = pin;
    }
    else if ((typeof pin.index !== "undefined") && (typeof selectedPin.index === "undefined") ) {
        addConnection(pin, selectedPin);
    }
    else if ((typeof pin.index === "undefined") && (typeof selectedPin.index !== "undefined"));
        addConnection(selectedPin, pin);
}

function addConnection(target, source) {
    console.log("Connecting",source,"to",target);
    var src={id: source.parent, field: source.field}
    var dst = {id: target.parent, field: target.field, index: target.index}
    console.log(src,dst,data);
    data = circuits.js.add_connection_js(src, dst, data);
    selectedPin = null;
}

function makePins() {
    return d3.values(data).reduce(function (prev, component) {
        return prev.concat(makeComponentPins(component));
    }, []);
}

function drawPins(pinTrist) {
    var p = d3.select("#workspace")
        .selectAll("g.p")
        .data(pinTrist)
        .enter();
    line(p).classed("pin", true)
        .classed("connected", function (d) {
            return !!d["source-id"];
        });
    p.append("circle")
        .attr("cx", function(d) {
            if(typeof d.x1 === "undefined")
                return -100;
            return (d.x1+ d.x2)/2;
        })
        .attr("cy", function(d) {
            if(typeof d.x1 === "undefined")
                return -100;
            return (d.y1+ d.y2)/2;
        })
        .attr("r", 10)
        .classed("selection-background", true)
        .on("click", function (d) {
           selectPin(d);
        })

}

function makeComponentPins(component) {
    var len = 5;

    var pins;
    if (component.species == "mux")
        pins = makeMuxPins(component);
    else if (component.species == "ip")
        pins = makeIpPins(component);
    else if (component.species == "dflipflop" || component.species == "tflipflop")
        pins = makeFlipFlopPins(component);
    else if (component.species == "orgate" || component.species == "andgate"
        || component.species == "nandgate" || component.species == "xorgate"
        || component.species == "norgate"
        || component.species == "xnorgate")
        pins = makeLogicGatePins(component);
    else if (component.species == "decoder")
        pins = makeDecoderPins(component);
    else if (component.species == "notgate")
        pins = makeNotPins(component);
    else if (component.species == "register")
        pins = makeRegisterPins(component);

    var leftDistance = component.display.size / (pins.left.length * 2 );
    for (var index = 0; index < pins.left.length; index++) {
        pins.left[index].y1 = pins.left[index].y2 = component.display.y + leftDistance * (2 * index + 1);
        pins.left[index].x1 = component.display.x - len;
        pins.left[index].x2 = component.display.x + len;
        pins.left[index].parent = component.id;
    }

    var botDistance = component.display.size / (pins.bottom.length * 2);
    for (var index = 0; index < pins.bottom.length; index++) {
        pins.bottom[index].x1 = pins.bottom[index].x2 = component.display.x + botDistance * (2 * index + 1);
        pins.bottom[index].y2 = component.display.y + component.display.size - len;
        pins.bottom[index].y1 = pins.bottom[index].y2 + 2 * len;
        pins.bottom[index].parent = component.id;
    }

    var rightDistance = component.display.size / (pins.right.length * 2);
    for (var index = 0; index < pins.right.length; index++) {
        pins.right[index].y1 = pins.right[index].y2 = component.display.y + rightDistance * (2 * index + 1);
        pins.right[index].x2 = component.display.x + component.display.size - len;
        pins.right[index].x1 = pins.right[index].x2 + 2 * len;
        pins.right[index].parent = component.id;

    }

    return Object.keys(pins).reduce(function (array, side) {
        return array.concat(pins[side]);
    }, []);
}

//I can write logic gates all the same way (and, nand, or, nor, xor, xnor)
//Not is unique
//decoder and mux have similar structures
//FlipFlop is unique
//Register is unique.

function addComponent(name) {
    var display = {
        x: 25,
        y: 25,
        size: 60
    }
    data = circuits.js.add_component_js(name, data, display)
    draw();
}

function addFieldAndIndex(connections, field) {
    for(var x = 0; x < connections.length; x++) {
        connections[x].field = field;
        connections[x].index = x;
    }
    return connections;
}

function makeRegisterPins(reg) {
    var r = reg.outputs.q;
    return {left: addFieldAndIndex(reg.inputs.data.connections, "data"),bottom: {}, right: [r]};
}

function makeLogicGatePins(gate) {
    var r = gate.outputs.q;
    r.field = "q";
    return {left:  addFieldAndIndex(gate.inputs.data.connections, "data"),bottom: {}, right: [r]};
}

function makeDecoderPins(dec) {
    var r = dec.outputs.q;
    r.field = "q";
    return {left:  addFieldAndIndex(dec.inputs.data.connections, "data"),
        bottom:  addFieldAndIndex(dec.inputs.enable.connections, "enable"), right: [r]}

}

function makeNotPins(not) {
    var r = not.outputs.q;
    r.field = "q";
    return {left:  addFieldAndIndex(not.inputs.data.connections, "data"), bottom: {}, right: [r]}
}

function makeMuxPins(mux) {
    var r = mux.outputs.q;
    r.field = "q";
    return {left:  addFieldAndIndex(mux.inputs.data.connections, "data"), bottom:  addFieldAndIndex(mux.inputs.control.connections, "control"), right: [r]};
}

function makeIpPins(ip) {
    var r = ip.outputs.q;
    r.field = "q";
    return {left: [], bottom: [], right: [r]};
};

function makeFlipFlopPins(ff) {
    var r = [ff.outputs.q, ff.outputs["q-bar"]];
    r[0].field = "q";
    r[1].field = "qbar";
    return {left:  addFieldAndIndex(ff.inputs.data.connections, "data"), bottom:  addFieldAndIndex(ff.inputs.enable.connections, "enable"), right: r};
};

var currentSelection;

function selectComponent() {
    this.parentNode.appendChild(this);
    var selectTarget = d3.select(this);

    setTimeout(function () {
        selectTarget.classed("selected", true);

        currentSelection = selectTarget.id;
    }, 10);
}

function line(container) {
    return container.append("svg:line")
        .attr("x1", function (d) {
            return d.x1;
        })
        .attr("y1", function (d) {
            return d.y1;
        })
        .attr("x2", function (d) {
            return d.x2;
        })
        .attr("y2", function (d) {
            return d.y2;
        });
}

function circle(point) {
    d3.select("#workspace")
        .data(point).append("svg:circle")
        .attr("cx", function (d) {
            return d.x1
        })
        .attr("cy", function (d) {
            return d.x2
        })
        .attr("color", "#A00")
}

function setup() {
    var circuitRef = new Firebase('https://circuitswithfriends.firebaseIO.com/circuits');
    circuitRef.on('value', function (snapshot) {
        if (!data) {
            data = {};
        }
        else
            draw();
    });
    d3.select("#workspace-container").on("mouseup", function () {
        circuitRef.set(data);
    });
    d3.select("#workspace-container").on("click", function () {
        if (currentSelection != -1) {
            d3.select(".selected").classed("selected", false);
            currentSelection = -1;
        }
    });
}

