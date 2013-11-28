/*
 * Methods for drawing / adding components.
 */

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
