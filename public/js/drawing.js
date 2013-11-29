/*
 * Has all the D3 methods for drawing stuffs.
 */

angular.module('circuitApp.directives', ['d3'])
    .directive('workspace', ['stateService', 'd3', function(stateService, d3) {
        function removeSvg(type) {
            workspace
                .selectAll(type)
                .remove();
        }

        function clearCanvas() {
            removeSvg("g");
            removeSvg("rect");
            removeSvg("circle");
            removeSvg("line");
            removeSvg("image");
        }

        return {
            restrict: 'EA',
            scope: {
                data: '=',
                label: '@',
                onClick: '&'
            },
            template:'<g id="workspace-container"> <svg id="workspace"></svg>  </g>',
            link: function(scope, element, attrs) {
                var workspace = d3.select("#workspace");

                scope.$watch('data', function(newData) {
                    scope.draw(newData);
                }, true);
                scope.clearCanvas = clearCanvas;
                scope.move = move;
                scope.draw = draw();
                scope.drawComponents = drawComponents;
                scope.circle = circle;
                scope.line = line;
            }};
    }])
    .factory('stateService', function() {


    });


function draw() {
    scope.clearCanvas();
    scope.drawComponents();
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

    removeSvg("line");
    removeSvg("circle");
    var pins = makePins();
    var links = makeLinks(pins);
    drawLinks(links);
    drawPins(pins);
}

function updateAfterMove() {
    var newX = d3.event.dx + parseInt(dragTarget.attr("x"));
    var newY = d3.event.dy + parseInt(dragTarget.attr("y"));
    this.__data__.display.x = newX;
    this.__data__.display.y = newY;
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
    workspace
        .data(point).append("svg:circle")
        .attr("cx", function (d) {
            return d.x1
        })
        .attr("cy", function (d) {
            return d.x2
        })
        .attr("color", "#A00")
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

function drawComponents(data, moveAction, selectAction) {
    var component = workspace
        .selectAll("g.component")
        .data(d3.values(data))
        .enter().append("svg:g");

    component.append("svg:image")
        .attr("xlink:href", getSVG)
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
        .call(d3.behavior.drag().on("dragend", moveAction))
        .on("click", selectAction);
}

function getSVG(d) {
    if (d.species === 'outputpin') {
        if (!!d.value && d.value.length === 1 && d.value[0][0])
            return "../svg/glow/outputpin.svg";
        return "../svg/default/outputpin.svg";
    }
    if (!!d.state && !!d.state.data && d.state.data.length === 1 && d.state.data[0])
        return "../svg/glow/"+ d.species + ".svg";
    return "../svg/default/"+d.species+".svg";
}
