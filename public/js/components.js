/*
 * Methods for drawing / adding components.
 */

function drawComponents() {
    var component = d3.select("#workspace")
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
        .call(d3.behavior.drag().on("drag", move))
        .on("click", selectComponent);
}

function addComponent(name) {
    var size = 60;
    if (name === 'inputpin' || name === 'outputpin') {
        size = 35;
    }
    var display = {
        x: 25,
        y: 25,
        size: size
    }
    data = circuits.js.add_component(name, data, display)
    draw();
}

function getSVG(d) {
    if (d.species === 'outputpin') {
       if (!!d.value && d.value.length === 1 && d.value[0])
	       return "../svg/glow/outputpin.svg"
 	       return "../svg/default/outputpin.svg" 
    }
    if(!!d.state && !!d.state.data && d.state.data.length === 1 && d.state.data[0])
        return "../svg/glow/"+ d.species + ".svg";
    return "../svg/default/"+d.species+".svg";
}
