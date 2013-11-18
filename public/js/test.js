var key = "0"
var retVal = circuits.js.test_parse_json(circ, key)

var display = {x: 40, y: 40, size: 40}
var circ = {}

var circ = circuits.js.add_component_js(
  "andgate",
  {},
  {x: 40, y: 40, size: 40})

circ = circuits.js.add_component_js(
  "orgate",
  {},
  {x: 40, y: 40, size: 40})


circ = js.add_connection_js(
  {id: and0, field: q},
  {id: orgate0, field: data, index: 0},
  circ)


