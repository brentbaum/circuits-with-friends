/*
 * Everything related to selecting components.
 * All methods belong to WorkspaceCtrl
 */

function selectPin(pin, selectedPin) {
    if(!isDefined(pin))
        return;
    if(isDefined(selectedPin) && isDefined(pin) && (!pin.parent || pin.parent === selectedPin.parent) && pin.field === selectedPin.field) {
        selectedPin = null;
    }
    else if (!isDefined(selectedPin)) {
        selectedPin = pin;
    }
    else if (isDefined(selectedPin) && isDefined(pin) && isDefined(pin.index) && !isDefined(selectedPin.index) ) {
        $scope.addConnection(pin, selectedPin);
    }
    else if (isDefined(selectedPin) && isDefined(pin) && !isDefined(pin.index) && isDefined(selectedPin.index)) {
        $scope.addConnection(selectedPin, pin);
    }
}

function addConnection(target, source) {
    if(target == null || source == null)
        return;
    var src={id: source.parent, field: source.field}
    var dst = {id: target.parent, field: target.field, index: target.index}
    $scope.selectedPin = null;
    return circuits.js.add_connection(src, dst, $scope.data);
}

function selectComponent(d) {
    this.parentNode.appendChild(this);
    var selectTarget = d3.select(this);

    setTimeout(function () {
        selectTarget.classed("selected", true);

        selectedComponent = d.id;
        highlightSelected();
    }, 10);

}

function deselectComponent () {
    if (isDefined(selectedComponent)) {
        d3.select(".selected").classed("selected", false);
        d3.select(".selected").remove();
        selectedComponent = null;
    }
}

function highlightSelected() {
    if(d3.select(".selected")) {
        var s = d3.select(".selected");

        workspace.append("rect").attr("x", s.attr("x"))
            .attr("y", s.attr("y"))
            .attr("width", s.attr("width"))
            .attr("height", s.attr("height"))
            .classed("selected", true);

        /*workspace.append("rect")
            .attr("x", s.attr("x") + parseInt(s.style("width"), 10)-5)
            .attr("y", 0)
            .attr("height", 5)
            .attr('width', 5)
            .classed("delete-button", true)*/ch
    }
}
