// Compiled by ClojureScript 0.0-2030
goog.provide('circuits.validate');
goog.require('cljs.core');
/**
* Determines whether the given map has duplicate keys
*/
circuits.validate.unique_keys_QMARK_ = (function unique_keys_QMARK_(_map){var keyss = cljs.core.keys(_map);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(keyss),cljs.core.count(cljs.core.distinct(keyss)));
});
circuits.validate.validate_connection = (function validate_connection(src,dst,circuit){return null;
});
circuits.validate.validate_state = (function validate_state(circuit){return true;
});
