(ns circuits.logic-test
  (:require [expectations :refer :all]
            [circuits.comp-logic :refer :all]))

(expect 7  (decode  [true true true]))
(expect 7  (decode  [false true true true]))
(expect 11  (decode  [true false true true]))
(expect false (only-one? [false true false]))

(expect true (do-mux [true false true false] [false false]))
(expect true (do-mux [true false true false] [true false]))
(expect [true true true] (do-mux [[true false true] 
                      [false false false]
                      [true true true]
                      [false true false]] [true false]))

(expect [false] (do-or [[false] [false]]))
(expect [true] (do-or [[true] [false]]))
(expect [true true]   (do-or [[true false][false true]]))
(expect [true false]  (do-or [[true false][false false]]))
(expect [false false] (do-or [[false false][false false]]))

(expect [false] (do-xor [[true] [true]]))
(expect [false] (do-xor [[false] [false]]))
(expect [true] (do-xor [[true] [false]]))
(expect [true] (do-xor [[false] [true]]))

(expect [true false false] (do-xor [[false true false] 
                                   [true true false]
                                   [false true false]]))
(expect [true] (do-and [[true] [true]]))
(expect [false] (do-and [[false] [false]]))
(expect [true false false true] (do-and [[true true false true]
                                         [true false true true]
                                         [true true false true]]))
