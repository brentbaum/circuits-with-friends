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