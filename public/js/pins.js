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
    else if (component.species == "inputpin")
        pins = makeIpPins(component);
    else if (component.species == "outputpin")
        pins = makeOpPins(component);
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

    //TODO don't put display in data

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

function makeOpPins(op) {
  return {left: addFieldAndIndex(op.inputs.data.connections, "data"), bottom: {}, right: []}
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

