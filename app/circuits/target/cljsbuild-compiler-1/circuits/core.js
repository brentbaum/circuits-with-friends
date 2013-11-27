// Compiled by ClojureScript 0.0-2030
goog.provide('circuits.core');
goog.require('cljs.core');
goog.require('circuits.comp_builder');
goog.require('circuits.test_data');
goog.require('circuits.validate');
goog.require('circuits.test_data');
goog.require('circuits.comp_logic');
goog.require('circuits.validate');
goog.require('circuits.comp_logic');
goog.require('clojure.browser.repl');
goog.require('circuits.comp_builder');
goog.require('clojure.browser.repl');
circuits.core.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
circuits.core.state_buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
circuits.core.eval_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
circuits.core.set_state = (function set_state(component_map){return cljs.core.reset_BANG_(circuits.core.state_atom,component_map);
});
circuits.core.clear_state = (function clear_state(){return cljs.core.reset_BANG_(circuits.core.state_atom,cljs.core.PersistentArrayMap.EMPTY);
});
circuits.core.generate_id = (function generate_id(species,circuit){var same_species = cljs.core.filter((function (p1__5281_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p1__5281_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5281_SHARP_.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$22) : p1__5281_SHARP_.call(null,cljs.core.constant$keyword$22)),species);
}),cljs.core.vals(circuit));var same_count = cljs.core.count(same_species);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(species),cljs.core.str(same_count)].join(''));
});
circuits.core.evaluate_component = (function evaluate_component(component){var component_type = (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$22) : component.call(null,cljs.core.constant$keyword$22));var eval_fn = (circuits.core.function_map.cljs$core$IFn$_invoke$arity$1 ? circuits.core.function_map.cljs$core$IFn$_invoke$arity$1(component_type) : circuits.core.function_map.call(null,component_type));var result = (eval_fn.cljs$core$IFn$_invoke$arity$1 ? eval_fn.cljs$core$IFn$_invoke$arity$1(component) : eval_fn.call(null,component));return result;
});
circuits.core.find_output_components = (function find_output_components(circuit){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter((function (p1__5282_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("outputpin",cljs.core.val(p1__5282_SHARP_).call(null,cljs.core.constant$keyword$22));
}),circuit));
});
circuits.core.remove_component = (function remove_component(id,circuit){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(circuit,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id));
});
circuits.core.evaluate = (function evaluate(state){if(cljs.core.truth_(circuits.validate.validate_state(state)))
{var newstate = cljs.core.reset_BANG_(circuits.core.state_atom,state);var cleared_cache = cljs.core.reset_BANG_(circuits.core.eval_cache,cljs.core.PersistentArrayMap.EMPTY);var components = circuits.core.find_output_components(newstate);var result = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(circuits.core.evaluate_component,cljs.core.vals(components)));var final_state = cljs.core.into(cljs.core.deref(circuits.core.state_atom),cljs.core.deref(circuits.core.state_buffer));return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$69,result,cljs.core.constant$keyword$25,final_state], true);
} else
{return null;
}
});
circuits.core.add_component = (function add_component(species,circuit,display){var new_id = circuits.core.generate_id(species,circuit);var new_component = circuits.comp_builder.build_component(species,new_id);var with_display = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_component,cljs.core.constant$keyword$32,display);var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(circuit,new_id,with_display);return new_state;
});
circuits.core.add_connection = (function add_connection(src,dst,input_circuit){var dstid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : dst.call(null,cljs.core.constant$keyword$20)));var dstfield = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$72) : dst.call(null,cljs.core.constant$keyword$72)));var srcid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((src.cljs$core$IFn$_invoke$arity$1 ? src.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : src.call(null,cljs.core.constant$keyword$20)));var srcfield = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((src.cljs$core$IFn$_invoke$arity$1 ? src.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$72) : src.call(null,cljs.core.constant$keyword$72)));var dst_component = (input_circuit.cljs$core$IFn$_invoke$arity$1 ? input_circuit.cljs$core$IFn$_invoke$arity$1(dstid) : input_circuit.call(null,dstid));var dst_inputs = (dst_component.cljs$core$IFn$_invoke$arity$1 ? dst_component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$23) : dst_component.call(null,cljs.core.constant$keyword$23));var dst_field = (dst_inputs.cljs$core$IFn$_invoke$arity$1 ? dst_inputs.cljs$core$IFn$_invoke$arity$1(dstfield) : dst_inputs.call(null,dstfield));var dst_vector = (dst_field.cljs$core$IFn$_invoke$arity$1 ? dst_field.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$18) : dst_field.call(null,cljs.core.constant$keyword$18));var dst_index = (dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73) : dst.call(null,cljs.core.constant$keyword$73));var new_connection = cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$36,srcid,cljs.core.constant$keyword$37,srcfield], true);var new_invec = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dst_vector,dst_index,new_connection);var new_circuit = cljs.core.assoc_in(input_circuit,cljs.core.PersistentVector.fromArray([dstid,cljs.core.constant$keyword$23,dstfield,cljs.core.constant$keyword$18], true),new_invec);return new_circuit;
});
circuits.core.remove_connection = (function remove_connection(src,dst,circuit){var dst_component = (circuit.cljs$core$IFn$_invoke$arity$1 ? circuit.cljs$core$IFn$_invoke$arity$1((dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : dst.call(null,cljs.core.constant$keyword$20))) : circuit.call(null,(dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : dst.call(null,cljs.core.constant$keyword$20))));var dst_inputs = (dst_component.cljs$core$IFn$_invoke$arity$1 ? dst_component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$23) : dst_component.call(null,cljs.core.constant$keyword$23));var dst_field = (dst_inputs.cljs$core$IFn$_invoke$arity$1 ? dst_inputs.cljs$core$IFn$_invoke$arity$1((dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$72) : dst.call(null,cljs.core.constant$keyword$72))) : dst_inputs.call(null,(dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$72) : dst.call(null,cljs.core.constant$keyword$72))));var dst_vector = (dst_field.cljs$core$IFn$_invoke$arity$1 ? dst_field.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$18) : dst_field.call(null,cljs.core.constant$keyword$18));var dst_index = (dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73) : dst.call(null,cljs.core.constant$keyword$73));var new_invec = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dst_vector,dst_index,cljs.core.PersistentArrayMap.EMPTY);var new_circuit = cljs.core.assoc_in(circuit,cljs.core.PersistentVector.fromArray([(dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : dst.call(null,cljs.core.constant$keyword$20)),cljs.core.constant$keyword$23,(dst.cljs$core$IFn$_invoke$arity$1 ? dst.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$72) : dst.call(null,cljs.core.constant$keyword$72)),cljs.core.constant$keyword$18], true),new_invec);return new_circuit;
});
circuits.core.inner_fn = (function inner_fn(mapping){var source_component = cljs.core.deref(circuits.core.state_atom).call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$36) : mapping.call(null,cljs.core.constant$keyword$36))));var eval_fn = (circuits.core.function_map.cljs$core$IFn$_invoke$arity$1 ? circuits.core.function_map.cljs$core$IFn$_invoke$arity$1((source_component.cljs$core$IFn$_invoke$arity$1 ? source_component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$22) : source_component.call(null,cljs.core.constant$keyword$22))) : circuits.core.function_map.call(null,(source_component.cljs$core$IFn$_invoke$arity$1 ? source_component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$22) : source_component.call(null,cljs.core.constant$keyword$22))));var the_outputs = (eval_fn.cljs$core$IFn$_invoke$arity$1 ? eval_fn.cljs$core$IFn$_invoke$arity$1(source_component) : eval_fn.call(null,source_component));var result = (the_outputs.cljs$core$IFn$_invoke$arity$1 ? the_outputs.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$37) : mapping.call(null,cljs.core.constant$keyword$37)))) : the_outputs.call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$37) : mapping.call(null,cljs.core.constant$keyword$37)))));return result;
});
circuits.core.gen_input_field = (function gen_input_field(kvpair){return cljs.core.PersistentArrayMap.fromArray([cljs.core.key(kvpair),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(circuits.core.inner_fn,cljs.core.val(kvpair).call(null,cljs.core.constant$keyword$18)))], true);
});
circuits.core.get_inputs = (function get_inputs(component){var lookup_result = cljs.core.deref(circuits.core.eval_cache).call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : component.call(null,cljs.core.constant$keyword$20))));if(cljs.core.truth_(lookup_result))
{return lookup_result;
} else
{return (circuits.core.gen_inputs.cljs$core$IFn$_invoke$arity$1 ? circuits.core.gen_inputs.cljs$core$IFn$_invoke$arity$1(component) : circuits.core.gen_inputs.call(null,component));
}
});
circuits.core.gen_inputs = (function gen_inputs(component){var input_maps = (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$23) : component.call(null,cljs.core.constant$keyword$23));var input_fields = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(circuits.core.gen_input_field,input_maps));var result = (((cljs.core.count(input_fields) > 1))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,input_fields):cljs.core.first(input_fields));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(circuits.core.eval_cache,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : component.call(null,cljs.core.constant$keyword$20))),result);
return result;
});
circuits.core.and_eval = (function and_eval(andgate){var inputs = circuits.core.get_inputs(andgate);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,circuits.comp_logic.do_and((inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : inputs.call(null,cljs.core.constant$keyword$15)))], true);
});
circuits.core.nand_eval = (function nand_eval(nandgate){var and_value = circuits.core.and_eval(nandgate);var negated = cljs.core.not(and_value);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,negated], true);
});
circuits.core.or_eval = (function or_eval(orgate){var inputs = circuits.core.get_inputs(orgate);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,circuits.comp_logic.do_or((inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : inputs.call(null,cljs.core.constant$keyword$15)))], true);
});
circuits.core.nor_eval = (function nor_eval(norgate){var or_value = circuits.core.or_eval(norgate);var negated = cljs.core.not(or_value);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,negated], true);
});
circuits.core.xor_eval = (function xor_eval(xorgate){var inputs = circuits.core.get_inputs(xorgate);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,circuits.comp_logic.do_xor((inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : inputs.call(null,cljs.core.constant$keyword$15)))], true);
});
circuits.core.xnor_eval = (function xnor_eval(xnorgate){var xor_value = circuits.core.xor_eval(xnorgate);var negated = cljs.core.not(xor_value);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,negated], true);
});
circuits.core.decoder_eval = (function decoder_eval(decoder){var input = circuits.core.get_inputs(decoder);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,circuits.comp_logic.do_decode((input.cljs$core$IFn$_invoke$arity$1 ? input.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : input.call(null,cljs.core.constant$keyword$15)))], true);
});
circuits.core.mux_eval = (function mux_eval(mux){var inputs = circuits.core.get_inputs(mux);var data = (inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : inputs.call(null,cljs.core.constant$keyword$15));var control = cljs.core.flatten((inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$27) : inputs.call(null,cljs.core.constant$keyword$27)));var result = circuits.comp_logic.do_mux(data,control);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,result], true);
});
circuits.core.not_eval = (function not_eval(notgate){var inputs = circuits.core.get_inputs(notgate);var data = cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(inputs);var only_one = cljs.core.first(data);return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.not,only_one))], true);
});
circuits.core.register_eval = (function register_eval(register){var state = (register.cljs$core$IFn$_invoke$arity$1 ? register.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$25) : register.call(null,cljs.core.constant$keyword$25));var data = (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : state.call(null,cljs.core.constant$keyword$15));var inputs = circuits.core.get_inputs(register);var enabled = (inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$26) : inputs.call(null,cljs.core.constant$keyword$26));if(cljs.core.truth_(enabled))
{var updated_state_5283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$15,cljs.core.first((inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : inputs.call(null,cljs.core.constant$keyword$15))));var updated_register_5284 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(register,cljs.core.constant$keyword$25,updated_state_5283);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(circuits.core.state_buffer,cljs.core.assoc,(register.cljs$core$IFn$_invoke$arity$1 ? register.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : register.call(null,cljs.core.constant$keyword$20)),updated_register_5284);
} else
{}
return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,data], true);
});
circuits.core.d_flipflop_eval = (function d_flipflop_eval(dff){console.log("DFF Eval called");
var state = (dff.cljs$core$IFn$_invoke$arity$1 ? dff.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$25) : dff.call(null,cljs.core.constant$keyword$25));var data = (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : state.call(null,cljs.core.constant$keyword$15));var inputs = circuits.core.get_inputs(dff);var enabled = (inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$26) : inputs.call(null,cljs.core.constant$keyword$26));if(cljs.core.truth_(enabled))
{var updated_state_5285 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$15,cljs.core.vec(cljs.core.first((inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : inputs.call(null,cljs.core.constant$keyword$15)))));var updated_dff_5286 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dff,cljs.core.constant$keyword$25,updated_state_5285);var updated_state_5287__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(circuits.core.state_buffer),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((dff.cljs$core$IFn$_invoke$arity$1 ? dff.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : dff.call(null,cljs.core.constant$keyword$20))),updated_dff_5286);cljs.core.reset_BANG_(circuits.core.state_buffer,updated_state_5287__$1);
} else
{}
return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,data,cljs.core.constant$keyword$28,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.not,data))], true);
});
circuits.core.t_flipflop_eval = (function t_flipflop_eval(tff){var state = (tff.cljs$core$IFn$_invoke$arity$1 ? tff.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$25) : tff.call(null,cljs.core.constant$keyword$25));var data = (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : state.call(null,cljs.core.constant$keyword$15));var inputs = circuits.core.get_inputs(tff);var enabled = (inputs.cljs$core$IFn$_invoke$arity$1 ? inputs.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$26) : inputs.call(null,cljs.core.constant$keyword$26));if(cljs.core.truth_(enabled))
{var updated_state_5288 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$15,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.not,data)));var updated_tff_5289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tff,cljs.core.constant$keyword$25,updated_state_5288);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(circuits.core.state_buffer,cljs.core.assoc,(tff.cljs$core$IFn$_invoke$arity$1 ? tff.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$20) : tff.call(null,cljs.core.constant$keyword$20)),updated_tff_5289);
} else
{}
return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,data,cljs.core.constant$keyword$28,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.not,data))], true);
});
circuits.core.inputpin_eval = (function inputpin_eval(inputpin){var state = (inputpin.cljs$core$IFn$_invoke$arity$1 ? inputpin.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$25) : inputpin.call(null,cljs.core.constant$keyword$25));var data = (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$15) : state.call(null,cljs.core.constant$keyword$15));return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$19,data], true);
});
circuits.core.outputpin_eval = (function outputpin_eval(outputpin){var inputs = circuits.core.gen_inputs(outputpin);return inputs;
});
circuits.core.function_map = cljs.core.PersistentHashMap.fromArrays(["andgate","register","decoder","xnorgate","xorgate","tflipflop","inputpin","orgate","mux","outputpin","nandgate","dflipflop","norgate","notgate"],[circuits.core.and_eval,circuits.core.register_eval,circuits.core.decoder_eval,circuits.core.xnor_eval,circuits.core.xor_eval,circuits.core.t_flipflop_eval,circuits.core.inputpin_eval,circuits.core.or_eval,circuits.core.mux_eval,circuits.core.outputpin_eval,circuits.core.nand_eval,circuits.core.d_flipflop_eval,circuits.core.nor_eval,circuits.core.not_eval]);
