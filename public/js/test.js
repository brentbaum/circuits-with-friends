console.log(data)


data = circuits.js.remove_component("inputpin0", data)
data.dflipflop0.state.data[0] = false
data.inputpin1.state.data[0] = true
console.log(circuits.js.evaluate("outputpin0", data).result.data[0][0])
data = circuits.js.evaluate(data).state
console.log(circuits.js.remove_component("mux0", data))
console.log(circuits.js.evaluate(data))
