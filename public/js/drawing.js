/*
 * Has all the D3 methods for drawing stuffs.
 */

function draw() {
    clearCanvas();
    drawComponents();
    var pins = makePins();
    var links = makeLinks(pins);
    highlightSelected();
    drawPins(pins);
    drawLinks(links);
    if (selectedPin)
        circle(selectedPin).classed("selected", true);
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

    removeSvg("line");
    removeSvg("circle");
    var pins = makePins();
    var links = makeLinks(pins);
    drawLinks(links);
    drawPins(pins);
}

function clearCanvas() {
    removeSvg("g");
    removeSvg("rect");
    removeSvg("circle");
    removeSvg("line");
    removeSvg("image");
}

function removeSvg(type) {
    d3.select("#workspace")
        .selectAll(type)
        .remove();
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

