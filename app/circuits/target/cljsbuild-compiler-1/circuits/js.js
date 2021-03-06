// Compiled by ClojureScript 0.0-2030
goog.provide('circuits.js');
goog.require('cljs.core');
goog.require('circuits.core');
goog.require('circuits.core');
circuits.js.map_json = (function map_json(obj){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0));
});
circuits.js.add_component = (function add_component(species,circuit,display){var circuit_map = circuits.js.map_json(circuit);var display_map = circuits.js.map_json(display);return cljs.core.clj__GT_js(circuits.core.add_component(species,circuit_map,display_map));
});
goog.exportSymbol('circuits.js.add_component', circuits.js.add_component);
circuits.js.add_connection = (function add_connection(src,dst,circuit){var src_map = circuits.js.map_json(src);var dst_map = circuits.js.map_json(dst);var circuit_map = circuits.js.map_json(circuit);return cljs.core.clj__GT_js(circuits.core.add_connection(src_map,dst_map,circuit_map));
});
goog.exportSymbol('circuits.js.add_connection', circuits.js.add_connection);
circuits.js.remove_connection = (function remove_connection(src,dst,circuit){return null;
});
goog.exportSymbol('circuits.js.remove_connection', circuits.js.remove_connection);
circuits.js.evaluate = (function evaluate(circuit){return cljs.core.clj__GT_js(circuits.core.evaluate(circuits.js.map_json(circuit)));
});
goog.exportSymbol('circuits.js.evaluate', circuits.js.evaluate);
circuits.js.remove_component = (function remove_component(id,circuit){return cljs.core.clj__GT_js(circuits.core.remove_component(id,circuits.js.map_json(circuit)));
});
goog.exportSymbol('circuits.js.remove_component', circuits.js.remove_component);
circuits.js.set_field = (function set_field(id,circuit,key_,val_){return cljs.core.clj__GT_js(circuits.core.set_field(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),circuits.js.map_json(circuit),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key_),val_));
});
goog.exportSymbol('circuits.js.set_field', circuits.js.set_field);
