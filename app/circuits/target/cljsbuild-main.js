goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../circuits/validate.js", ['circuits.validate'], ['cljs.core']);
goog.addDependency("../circuits/comp_builder.js", ['circuits.comp_builder'], ['cljs.core']);
goog.addDependency("../circuits/test_data.js", ['circuits.test_data'], ['circuits.comp_builder', 'cljs.core']);
goog.addDependency("../circuits/comp_logic.js", ['circuits.comp_logic'], ['cljs.core']);
goog.addDependency("../circuits/core.js", ['circuits.core'], ['circuits.comp_builder', 'cljs.core', 'circuits.test_data', 'circuits.validate', 'circuits.comp_logic']);
goog.addDependency("../circuits/js.js", ['circuits.js'], ['cljs.core', 'circuits.core']);