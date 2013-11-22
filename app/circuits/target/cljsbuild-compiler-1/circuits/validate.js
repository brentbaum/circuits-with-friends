// Compiled by ClojureScript 0.0-2030
goog.provide('circuits.validate');
goog.require('cljs.core');
/**
* Determines whether the given map has duplicate keys
*/
circuits.validate.unique_keys_QMARK_ = (function unique_keys_QMARK_(_map){var keyss = cljs.core.keys.call(null,_map);return cljs.core._EQ_.call(null,cljs.core.count.call(null,keyss),cljs.core.count.call(null,cljs.core.distinct.call(null,keyss)));
});
circuits.validate.validate_component = (function validate_component(component){return null;
});
circuits.validate.validate_state = (function validate_state(proposed_state){return true;
});
