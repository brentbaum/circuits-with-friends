// Compiled by ClojureScript 0.0-2030
goog.provide('circuits.core');
goog.require('cljs.core');
goog.require('circuits.test_data');
goog.require('circuits.test_data');
goog.require('circuits.comp_builder');
goog.require('circuits.comp_builder');
goog.require('circuits.comp_logic');
goog.require('circuits.comp_logic');
goog.require('circuits.validate');
goog.require('circuits.validate');
circuits.core.state_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
circuits.core.set_state = (function set_state(component_map){return cljs.core.reset_BANG_.call(null,circuits.core.state_atom,component_map);
});
circuits.core.clear_state = (function clear_state(){return cljs.core.reset_BANG_.call(null,circuits.core.state_atom,cljs.core.PersistentArrayMap.EMPTY);
});
circuits.core.generate_id = (function generate_id(species,circuit){var same_species = cljs.core.filter.call(null,(function (p1__4856_SHARP_){return cljs.core._EQ_.call(null,p1__4856_SHARP_.call(null,new cljs.core.Keyword(null,"species","species",3300406446)),species);
}),cljs.core.vals.call(null,circuit));var same_count = cljs.core.count.call(null,same_species);return cljs.core.keyword.call(null,[cljs.core.str(species),cljs.core.str(same_count)].join(''));
});
circuits.core.evaluate_component = (function evaluate_component(component){var component_type = component.call(null,new cljs.core.Keyword(null,"species","species",3300406446));var eval_fn = circuits.core.function_map.call(null,component_type);var result = eval_fn.call(null,component);return result;
});
circuits.core.find_output_components = (function find_output_components(circuit){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__4857_SHARP_){return cljs.core._EQ_.call(null,"outputpin",cljs.core.val.call(null,p1__4857_SHARP_).call(null,new cljs.core.Keyword(null,"species","species",3300406446)));
}),circuit));
});
circuits.core.remove_component = (function remove_component(id,circuit){return cljs.core.dissoc.call(null,circuit,cljs.core.keyword.call(null,id));
});
circuits.core.evaluate = (function evaluate(state){if(cljs.core.truth_(circuits.validate.validate_state.call(null,state)))
{var newstate = cljs.core.reset_BANG_.call(null,circuits.core.state_atom,state);var components = circuits.core.find_output_components.call(null,newstate);var result = circuits.core.evaluate_component.call(null,cljs.core.val.call(null,cljs.core.first.call(null,components)));return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"result","result",4374444943),result,new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.deref.call(null,circuits.core.state_atom)], true);
} else
{return null;
}
});
circuits.core.add_component = (function add_component(species,circuit,display){var new_id = circuits.core.generate_id.call(null,species,circuit);var new_component = circuits.comp_builder.build_component.call(null,species,new_id);var with_display = cljs.core.assoc.call(null,new_component,new cljs.core.Keyword(null,"display","display",2685668404),display);var new_state = cljs.core.assoc.call(null,circuit,new_id,with_display);return new_state;
});
circuits.core.add_connection = (function add_connection(src,dst,input_circuit){var dstid = cljs.core.keyword.call(null,dst.call(null,new cljs.core.Keyword(null,"id","id",1013907597)));var dstfield = cljs.core.keyword.call(null,dst.call(null,new cljs.core.Keyword(null,"field","field",1111331948)));var srcid = cljs.core.keyword.call(null,src.call(null,new cljs.core.Keyword(null,"id","id",1013907597)));var srcfield = cljs.core.keyword.call(null,src.call(null,new cljs.core.Keyword(null,"field","field",1111331948)));var dst_component = input_circuit.call(null,dstid);var dst_inputs = dst_component.call(null,new cljs.core.Keyword(null,"inputs","inputs",4125005147));var dst_field = dst_inputs.call(null,dstfield);var dst_vector = dst_field.call(null,new cljs.core.Keyword(null,"connections","connections",2738507975));var dst_index = dst.call(null,new cljs.core.Keyword(null,"index","index",1114250308));var new_connection = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"source-id","source-id",3610412927),srcid,new cljs.core.Keyword(null,"source-field","source-field",1240617018),srcfield], true);var new_invec = cljs.core.assoc.call(null,dst_vector,dst_index,new_connection);var new_circuit = cljs.core.assoc_in.call(null,input_circuit,cljs.core.PersistentVector.fromArray([dstid,new cljs.core.Keyword(null,"inputs","inputs",4125005147),dstfield,new cljs.core.Keyword(null,"connections","connections",2738507975)], true),new_invec);return new_circuit;
});
circuits.core.remove_connection = (function remove_connection(src,dst,circuit){var dst_component = circuit.call(null,dst.call(null,new cljs.core.Keyword(null,"id","id",1013907597)));var dst_inputs = dst_component.call(null,new cljs.core.Keyword(null,"inputs","inputs",4125005147));var dst_field = dst_inputs.call(null,dst.call(null,new cljs.core.Keyword(null,"field","field",1111331948)));var dst_vector = dst_field.call(null,new cljs.core.Keyword(null,"connections","connections",2738507975));var dst_index = dst.call(null,new cljs.core.Keyword(null,"index","index",1114250308));var new_invec = cljs.core.assoc.call(null,dst_vector,dst_index,cljs.core.PersistentArrayMap.EMPTY);var new_circuit = cljs.core.assoc_in.call(null,circuit,cljs.core.PersistentVector.fromArray([dst.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),new cljs.core.Keyword(null,"inputs","inputs",4125005147),dst.call(null,new cljs.core.Keyword(null,"field","field",1111331948)),new cljs.core.Keyword(null,"connections","connections",2738507975)], true),new_invec);return new_circuit;
});
circuits.core.inner_fn = (function inner_fn(mapping){var source_component = cljs.core.deref.call(null,circuits.core.state_atom).call(null,cljs.core.keyword.call(null,mapping.call(null,new cljs.core.Keyword(null,"source-id","source-id",3610412927))));var eval_fn = circuits.core.function_map.call(null,source_component.call(null,new cljs.core.Keyword(null,"species","species",3300406446)));var the_outputs = eval_fn.call(null,source_component);var result = the_outputs.call(null,cljs.core.keyword.call(null,mapping.call(null,new cljs.core.Keyword(null,"source-field","source-field",1240617018))));return result;
});
circuits.core.gen_input_field = (function gen_input_field(kvpair){return cljs.core.PersistentArrayMap.fromArray([cljs.core.key.call(null,kvpair),cljs.core.doall.call(null,cljs.core.map.call(null,circuits.core.inner_fn,cljs.core.val.call(null,kvpair).call(null,new cljs.core.Keyword(null,"connections","connections",2738507975))))], true);
});
circuits.core.gen_inputs = (function gen_inputs(component){var input_maps = component.call(null,new cljs.core.Keyword(null,"inputs","inputs",4125005147));var input_fields = cljs.core.doall.call(null,cljs.core.map.call(null,circuits.core.gen_input_field,input_maps));var result = (((cljs.core.count.call(null,input_fields) > 1))?cljs.core.apply.call(null,cljs.core.conj,input_fields):cljs.core.first.call(null,input_fields));return result;
});
circuits.core.and_eval = (function and_eval(andgate){var inputs = circuits.core.gen_inputs.call(null,andgate);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),circuits.comp_logic.do_and.call(null,inputs.call(null,new cljs.core.Keyword(null,"data","data",1016980252)))], true);
});
circuits.core.nand_eval = (function nand_eval(nandgate){var and_value = circuits.core.and_eval.call(null,nandgate);var negated = cljs.core.not.call(null,and_value);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),negated], true);
});
circuits.core.or_eval = (function or_eval(orgate){var inputs = circuits.core.gen_inputs.call(null,orgate);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),circuits.comp_logic.do_or.call(null,inputs.call(null,new cljs.core.Keyword(null,"data","data",1016980252)))], true);
});
circuits.core.nor_eval = (function nor_eval(norgate){var or_value = circuits.core.or_eval.call(null,norgate);var negated = cljs.core.not.call(null,or_value);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),negated], true);
});
circuits.core.xor_eval = (function xor_eval(xorgate){var inputs = circuits.core.gen_inputs.call(null,xorgate);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),circuits.comp_logic.do_xor.call(null,inputs.call(null,new cljs.core.Keyword(null,"data","data",1016980252)))], true);
});
circuits.core.xnor_eval = (function xnor_eval(xnorgate){var xor_value = circuits.core.xor_eval.call(null,xnorgate);var negated = cljs.core.not.call(null,xor_value);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),negated], true);
});
circuits.core.decoder_eval = (function decoder_eval(decoder){var input = circuits.core.gen_inputs.call(null,decoder);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),circuits.comp_logic.do_decode.call(null,input.call(null,new cljs.core.Keyword(null,"data","data",1016980252)))], true);
});
circuits.core.mux_eval = (function mux_eval(mux){var inputs = circuits.core.gen_inputs.call(null,mux);var data = inputs.call(null,new cljs.core.Keyword(null,"data","data",1016980252));var control = cljs.core.flatten.call(null,inputs.call(null,new cljs.core.Keyword(null,"control","control",1965447375)));var result = circuits.comp_logic.do_mux.call(null,data,control);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),result], true);
});
circuits.core.not_eval = (function not_eval(notgate){var inputs = circuits.core.gen_inputs.call(null,notgate);var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(inputs);var only_one = cljs.core.first.call(null,data);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.not,only_one))], true);
});
circuits.core.register_eval = (function register_eval(register){var state = register.call(null,new cljs.core.Keyword(null,"state","state",1123661827));var data = state.call(null,new cljs.core.Keyword(null,"data","data",1016980252));var inputs = circuits.core.gen_inputs.call(null,register);var enabled = inputs.call(null,new cljs.core.Keyword(null,"enable","enable",4010023157));if(cljs.core.truth_(enabled))
{var updated_state_4858 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.first.call(null,inputs.call(null,new cljs.core.Keyword(null,"data","data",1016980252))));var updated_register_4859 = cljs.core.assoc.call(null,register,new cljs.core.Keyword(null,"state","state",1123661827),updated_state_4858);cljs.core.swap_BANG_.call(null,circuits.core.state_atom,cljs.core.assoc,register.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),updated_register_4859);
} else
{}
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),data], true);
});
circuits.core.d_flipflop_eval = (function d_flipflop_eval(dff){var state = dff.call(null,new cljs.core.Keyword(null,"state","state",1123661827));var data = state.call(null,new cljs.core.Keyword(null,"data","data",1016980252));var inputs = circuits.core.gen_inputs.call(null,dff);var enabled = inputs.call(null,new cljs.core.Keyword(null,"enable","enable",4010023157));if(cljs.core.truth_(enabled))
{var updated_state_4860 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.vec.call(null,cljs.core.first.call(null,inputs.call(null,new cljs.core.Keyword(null,"data","data",1016980252)))));var updated_dff_4861 = cljs.core.assoc.call(null,dff,new cljs.core.Keyword(null,"state","state",1123661827),updated_state_4860);var updated_state_4862__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,circuits.core.state_atom),cljs.core.keyword.call(null,dff.call(null,new cljs.core.Keyword(null,"id","id",1013907597))),updated_dff_4861);cljs.core.reset_BANG_.call(null,circuits.core.state_atom,updated_state_4862__$1);
} else
{}
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),data,new cljs.core.Keyword(null,"q-bar","q-bar",1119700009),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.not,data))], true);
});
circuits.core.t_flipflop_eval = (function t_flipflop_eval(tff){var state = tff.call(null,new cljs.core.Keyword(null,"state","state",1123661827));var data = state.call(null,new cljs.core.Keyword(null,"data","data",1016980252));var inputs = circuits.core.gen_inputs.call(null,tff);var enabled = inputs.call(null,new cljs.core.Keyword(null,"enable","enable",4010023157));if(cljs.core.truth_(enabled))
{var updated_state_4863 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.not,data)));var updated_tff_4864 = cljs.core.assoc.call(null,tff,new cljs.core.Keyword(null,"state","state",1123661827),updated_state_4863);cljs.core.swap_BANG_.call(null,circuits.core.state_atom,cljs.core.assoc,tff.call(null,new cljs.core.Keyword(null,"id","id",1013907597)),updated_tff_4864);
} else
{}
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),data,new cljs.core.Keyword(null,"q-bar","q-bar",1119700009),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.not,data))], true);
});
circuits.core.inputpin_eval = (function inputpin_eval(inputpin){var state = inputpin.call(null,new cljs.core.Keyword(null,"state","state",1123661827));var data = state.call(null,new cljs.core.Keyword(null,"data","data",1016980252));return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"q","q",1013904355),data], true);
});
circuits.core.outputpin_eval = (function outputpin_eval(outputpin){var inputs = circuits.core.gen_inputs.call(null,outputpin);return inputs;
});
circuits.core.function_map = cljs.core.PersistentHashMap.fromArrays(["andgate","register","decoder","xnorgate","xorgate","tflipflop","inputpin","orgate","mux","outputpin","nandgate","dflipflop","norgate","notgate"],[circuits.core.and_eval,circuits.core.register_eval,circuits.core.decoder_eval,circuits.core.xnor_eval,circuits.core.xor_eval,circuits.core.t_flipflop_eval,circuits.core.inputpin_eval,circuits.core.or_eval,circuits.core.mux_eval,circuits.core.outputpin_eval,circuits.core.nand_eval,circuits.core.d_flipflop_eval,circuits.core.nor_eval,circuits.core.not_eval]);
