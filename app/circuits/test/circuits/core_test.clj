(ns circuits.core-test
  (:require [expectations :refer :all]
            [circuits.core :refer :all]
            [circuits.test-data :as t]))

(expect {:q [true true true true, true true true true]}
        ((evaluate :mux1 t/components) :result))
(expect {:q [true true false false true true false false]} 
        ((evaluate :reg0 t/components) :result))
(expect {:data [false true false true false true false true]} 
        ((((evaluate :reg0 t/components) :state) :reg0) :state))
((((evaluate :reg0 t/components) :state) :reg0) :state)
;; Make sure the flip-flop returns the correct value
;; and updates its state properly
;; DFF
(expect {:q [false] :q-bar [true]} ((evaluate :dff0 t/components) :result))
(expect [true] (((((evaluate :dff0 t/components) 
                   :state) :dff0) :state) :data))
;; TFF
(expect {:q [false] :q-bar [true]} ((evaluate :tff0 t/components) :result))

(expect [true] (((((evaluate :tff0 t/components) 
                   :state) :tff0) :state) :data)) 

;; Not gate
(expect {:q [false]} ((evaluate :not0 t/components) :result))

(expect {} (((add-component "mux" t/components) "mux2") :state))
(expect {} (((add-component "xorgate" {}) "xorgate0") :state))
(expect {} ((((add-connection {:id :ip3 :field :q}
                             {:id :mux0 :field :data :index 0}
                             t/components) :mux0) :inputs) :connections))
