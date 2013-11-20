var selectedPin;
var selectedComponent;

function selectPin(pin) {
    if(!isDefined(pin))
        return;
    if(isDefined(selectedPin) && isDefined(pin) && (!pin.parent || pin.parent === selectedPin.parent) && pin.field === selectedPin.field) {
        selectedPin = null;
    }
    else if (!isDefined(selectedPin)) {
        selectedPin = pin;
    }
    else if (isDefined(selectedPin) && isDefined(pin) && isDefined(pin.index) && !isDefined(selectedPin.index) ) {
        addConnection(pin, selectedPin);
    }
    else if (isDefined(selectedPin) && isDefined(pin) && !isDefined(pin.index) && isDefined(selectedPin.index)) {
        addConnection(selectedPin, pin);
    }
}

function addConnection(target, source) {
    if(target == null || source == null)
        return;
    var src={id: source.parent, field: source.field}
    var dst = {id: target.parent, field: target.field, index: target.index}
    data = circuits.js.add_connection(src, dst, data);
    selectedPin = null;
    circuitRef.set(data);
    draw();
}

function selectComponent() {
    this.parentNode.appendChild(this);
    var selectTarget = d3.select(this);

    setTimeout(function () {
        selectTarget.classed("selected", true);

        selectedComponent = selectTarget.id;
    }, 10);

}

function checkDeselect () {
    if (selectedComponent !== "undefined") {
        d3.select(".selected").classed("selected", false);
        selectedComponent = "undefined";
    }
}
