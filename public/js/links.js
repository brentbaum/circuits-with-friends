function makeLinks(pins) {
    var links = [];
    pins.forEach(function (pin) {
        if (!!pin["source-id"]) {
            var source = findSource(pins, pin["source-id"], pin["source-field"])
            if(!!source) {
                links.push({
                    x1: pin.x1, y1: pin.y1, target: pin,
                    y2: source.y1, x2: source.x1, source: source
                })
            }
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

