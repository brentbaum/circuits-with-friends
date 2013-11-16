var data =
    {
        components: {
            1:{
                display: {x: 50, y: 50, size: 50},
                outConnect: [2]
            },
            2:{
                display: {x: 150, y: 200, size: 50},
                outConnect: [3]
            },
            3:{
                display: {x: 250, y: 200, size: 50},
                outConnect: []
            }
        }
    };

var width = 500;
var height = 500;

setup();
drawComponents();
drawLines();

function drawComponents() {
    removeComponent("rect");

    var components = d3.select("#workspace")
        .selectAll("g.component")
        .data(d3.values(data.components))
        .enter().append("svg:g");

    components.append("svg:rect").attr("class", "component")
        .attr("width", function(d) {return d.display.size})
        .attr("height", function(d) {return d.display.size})
        .attr("x", function(d) {return d.display.x})
        .attr("y", function(d) {return d.display.y})
        .call(d3.behavior.drag().on("drag", move))
        .on("click", selectComponent);
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

    var line = connection.enter()
        .append("svg:line")
        .attr("x1", function(d) {return d[0].x;})
        .attr("y1", function(d) {return d[0].y;})
        .attr("x2", function(d) {return d[1].x;})
        .attr("y2", function(d) {return d[1].y;});

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
    d3.values(data.components).forEach(function (component) {
        component.outConnect.forEach(function (id) {
            var component2 = data.components[id]
            links.push(
                [
                    {x: component.display.x + component.display.size/2, y: component.display.y + component.display.size/2},
                    {x: component2.display.x + component2.display.size/2, y: data.components[id].display.y + component2.display.size/2}
                ]);
        })
    });
    return links
}

var lastConnected = 3;

function addComponent() {
    var current = lastConnected + 1;
    data.components[current] = {
        display: {x: 250, y: 200, size: 50},
        outConnect: []
    };
    data.components[lastConnected].outConnect.push(current);
    lastConnected = current;

    drawComponents();
    drawLines();
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
    d3.select("#workspace").on("click", function() {
        console.log("click!");
        if(currentSelection != -1) {
            d3.select(".selected").classed("selected", false);
            currentSelection = -1;
        }
    });

}

//Spec

var data = {
    1: {
        id: 1,
        type: "mux",
        output: {
            q: {wordLength : 1}
        },
        state: {},
        connections: {
            data: {
                numInputs: 4,
                wordLength: 1,
                connections: [
                    {"source-id": 0, "source-field": "q"},
                    {"source-id": 1, "source-field": "q"},
                    {"source-id": 2, "source-field": "q"},
                    {"source-id": 3, "source-field": "q"}
                ]
            },
            control: {
                numInputs: 1,
                wordLength: 2,
                connections: [
                    {"source-id": 3, "source-field": "q"}
                ]

            }
        }
    },
    2: {
        id: 2,
        type: "ip",
        output: {
            q: {wordLength: 1}
        },
        state: {
            data: [true]
        }
    },
    3: {
        id: 3,
        type: "flipflop",
        output: {
            q: {wordLength: 1},
            qbar: {wordLength: 1}
        },
        connections: {
            data: {
                numInputs : 4,
                    wordLength: 1,
                    connections: [
                        {"source-id": 6, "source-field": "zero?"}
                    ]
            },
            enable: {
                numInputs: 1,
                wordLength: 1,
                connections: [
                    {"source-id":7, "source-field": "q"}
                ]
            }
        },
        state: {
            data: [false]
        }
    }
}