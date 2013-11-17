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
(generate-id "mux" t/components)
;; Not gate
(expect {:q [false]} ((evaluate :not0 t/components) :result))

;(expect {} (((add-component "mux" t/components {}) :mux2) :state))
;(expect {} (((add-component "xorgate" {} {}) :xorgate0) :state))
(expect {} ((((add-connection {:id :ip3 :field :q}
                             {:id :mux0 :field :data :index 0}
                             t/components) :mux0) :inputs) :data))

;(expect {} ((remove-connection {}
                              ;{:id :mux0 :field :control :index 0}
                              ;t/components) :mux0))
;(expect {:x 40 :y 40 :size 70} (add-component "mux" {} {:x 40 :y 40 :size 70}))
(expect {:q [true]} ((evaluate :and0 t/and-set) :result))
(expect {:q [true]} ((evaluate :or0 t/or-set) :result))
