// Compiled by ClojureScript 0.0-2030
goog.provide('circuits.comp_logic');
goog.require('cljs.core');
circuits.comp_logic.exp = (function exp(x,n){var acc = 1;var n__$1 = n;while(true){
if((n__$1 === 0))
{return acc;
} else
{{
var G__4854 = (x * acc);
var G__4855 = (n__$1 - 1);
acc = G__4854;
n__$1 = G__4855;
continue;
}
}
break;
}
});
circuits.comp_logic.decode = (function decode(input){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,(function (k,v){if(v === true)
{return circuits.comp_logic.exp.call(null,2,k);
} else
{return null;
}
}),cljs.core.reverse.call(null,input))));
});
circuits.comp_logic.get_n_tuples = (function get_n_tuples(coll){return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,coll);
});
circuits.comp_logic.only_one_QMARK_ = (function only_one_QMARK_(coll){return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),1);
});
circuits.comp_logic.all_true_QMARK_ = (function all_true_QMARK_(coll){return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,coll);
});
circuits.comp_logic.do_mux = (function do_mux(data,control){return cljs.core.nth.call(null,data,circuits.comp_logic.decode.call(null,control));
});
circuits.comp_logic.do_and = (function do_and(args){var n_tuples = circuits.comp_logic.get_n_tuples.call(null,args);var all_true = cljs.core.map.call(null,circuits.comp_logic.all_true_QMARK_,n_tuples);return cljs.core.vec.call(null,all_true);
});
circuits.comp_logic.do_or = (function do_or(args){var n_tuples = circuits.comp_logic.get_n_tuples.call(null,args);var any_true_nils = cljs.core.map.call(null,((function (n_tuples){
return (function (p1__4856_SHARP_){return cljs.core.some.call(null,cljs.core.true_QMARK_,p1__4856_SHARP_);
});})(n_tuples))
,n_tuples);var any_true = cljs.core.map.call(null,((function (n_tuples,any_true_nils){
return (function (x){if((x == null))
{return false;
} else
{return x;
}
});})(n_tuples,any_true_nils))
,any_true_nils);return cljs.core.vec.call(null,any_true);
});
circuits.comp_logic.get_n_tuples.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,2,3], true),cljs.core.PersistentVector.fromArray([1,2,3], true),cljs.core.PersistentVector.fromArray([1,2,3], true)], true));
circuits.comp_logic.do_xor = (function do_xor(args){var n_tuples = circuits.comp_logic.get_n_tuples.call(null,args);var filtered_true = cljs.core.map.call(null,((function (n_tuples){
return (function (p1__4857_SHARP_){return cljs.core.filter.call(null,cljs.core.true_QMARK_,p1__4857_SHARP_);
});})(n_tuples))
,n_tuples);var results = cljs.core.map.call(null,circuits.comp_logic.only_one_QMARK_,filtered_true);return cljs.core.vec.call(null,results);
});
circuits.comp_logic.do_decode = (function do_decode(arg){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,1,arg)));
});
