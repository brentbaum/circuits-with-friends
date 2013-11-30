/*
 * Has all the D3 methods for drawing stuffs.
 */

angular.module('circuitApp.directives', ['d3'])
    .directive('workspace', ['calculateService', 'sessionService', 'd3', function(calculateService, sessionService, d3) {
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

                scope.dragging = false;

                scope.$watch(function () { return sessionService.data; }, function(d) {
                    console.log(d);
                    if(!scope.dragging)
                        scope.draw(false);
                    else
                        scope.draw(true);
                }, true);

                scope.circle = circle;
                scope.line = line;

                scope.draw = function(isDragging) {
                    scope.clearCanvas();
                    if(!isDragging)
                        scope.drawComponents();
                    scope.highlightSelected();
                    var pins = calculateService.makePins(sessionService.data);
                    var links = calculateService.makeLinks(pins);
                    scope.drawPins(pins);
                    scope.drawLinks(links);
                    //if (isDefined(scope.selectedPin))
                    //    circle(scope.selectedPin).classed("selected", true);
                }

                scope.removeSvg = function removeSvg(type) {
                    d3.select("#workspace")
                        .selectAll(type)
                        .remove();
                }

                scope.clearCanvas = function() {
                    scope.removeSvg("g");
                    scope.removeSvg("rect");
                    scope.removeSvg("circle");
                    scope.removeSvg("line");
                    scope.removeSvg("image");
                }

                scope.drawLinks = function(links) {
                    var connection = d3.select("#workspace")
                        .selectAll("line.link")
                        .data(links).enter();

                    line(connection);

                    connection
                        .append("svg:circle")
                        .attr("r", 2.5)
                        .attr("cx", function (d) {
                            return d.target.x1;
                        })
                        .attr("cy", function (d) {
                            return d.target.y1;
                        })

                    connection
                        .append("svg:circle")
                        .attr("r", 2.5)
                        .attr("cx", function (d) {
                            return d.source.x1;
                        })
                        .attr("cy", function (d) {
                            return d.source.y1;
                        })

                }

                scope.drawPins = function(pinTrist) {
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
                        .on("click", selectPin)
                }

                scope.drawComponents = function() {
                    var component = d3.select("#workspace")
                        .selectAll("g.component")
                        .data(d3.values(sessionService.data))
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
                        .attr("ng-class", function(d) {
                            return "{true:'selected', false:''}[" + d.id + "==selectedComponent]";
                        })
                        .call(d3.behavior.drag().on("drag", scope.move).on("dragend", scope.updateAfterDrag))
                        .on("click", selectComponent);
                }

                scope.updateAfterDrag = function() {
                    if(isDefined(this.parentNode)) {
                        this.parentNode.appendChild(this);
                        var dragTarget = d3.select(this);

                        var newX = parseInt(dragTarget.attr("x"));
                        var newY = parseInt(dragTarget.attr("y"));
                        this.__data__.display.x = newX;
                        this.__data__.display.y = newY;
                    }
                };

                scope.highlightSelected = function() {
                    if(!d3.select(".selected").empty()) {
                        var s = d3.select(".selected");

                        d3.select("#workspace").append("rect").attr("x", s.attr("x"))
                            .attr("y", s.attr("y"))
                            .attr("width", s.attr("width"))
                            .attr("height", s.attr("height"))
                            .classed("selected", true);
                    }
                }

                scope.move = function() {
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
                }
            }};
    }])

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