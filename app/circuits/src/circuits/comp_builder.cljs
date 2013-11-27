(ns circuits.comp-builder)

(defn build-logic-gate [species id]
  (let [inputs {:data {:word-length 1
                       :num-pins 2
                       :connections [{} {}]}}
        outputs {:q {:word-length 1
                     :num-pins 1}}]
    {:id id :label id :species species
     :inputs inputs :outputs outputs :state {}}))

(defn build-andgate [id] 
  (build-logic-gate "andgate" id))
(defn build-nandgate [id] 
  (build-logic-gate "nandgate" id))
(defn build-orgate [id]
  (build-logic-gate "orgate" id))
(defn build-norgate [id]
  (build-logic-gate "norgate" id))
(defn build-xorgate [id]
  (build-logic-gate "xorgate" id))
(defn build-xnorgate [id]
  (build-logic-gate "xnorgate" id))

(defn build-notgate [id]
  (let [
        inputs {:data {:word-length 1
                       :num-pins 1
                       :connections [{}]}}
        outputs {:q {:word-length 1
                     :num-pins 1}}]
    {:id id :label id :species "notgate"
     :inputs inputs :outputs outputs :state {}})) 

(defn build-decoder [id]
  (let [
        inputs {:data {:word-length 2
                       :num-pins 1
                       :connections [{}]}
                :enable {:word-length 1
                         :num-pins 1
                         :connections [{}]}}
        outputs {:q {:word-length 1
                     :num-pins 4}}]
    {:id id :label id :species "decoder"
     :inputs inputs :outputs outputs :state {}}))

(defn build-mux [id] 
  (let [
        inputs {:data {:word-length 1
                       :num-pins 4
                       :connections [{} {} {} {}]}
                :control {:word-length 2
                          :num-pins 1
                          :connections [{}]}}
        outputs {:q {:word-length 1
                     :num-pins 1}}]
    {:id id :label id :species "mux"
     :inputs inputs :outputs outputs :state {}})) 

(defn build-dff [id]
  (let [
        inputs {:data {:word-length 1
                       :num-pins 1
                       :connections [{}]}
                :enable {:word-length 1
                         :num-pins 1
                         :connections [{}]}}
        outputs {:q {:word-length 1
                     :num-pins 1}
                 :q-bar {:word-length 1
                         :num-pins 1}}]
    {:id id :label id :species "dflipflop"
     :inputs inputs :outputs outputs :state {:data [false]}}))

(defn build-tff [id]
  (let [
        inputs {:data {:word-length 1
                       :num-pins 1
                       :connections [{}]}
                :enable {:word-length 1
                         :num-pins 1
                         :connections [{}]}}
        outputs {:q {:word-length 1
                     :num-pins 1}
                 :q-bar {:word-length 1
                         :num-pins 1}}]
    {:id id :label id :species "tflipflop"
     :inputs inputs :outputs outputs :state {:data [false]}}))

(defn build-register [id]
  (let [
        inputs {:data {:word-length 8
                       :num-pins 1
                       :connections [{}]}
                :enable {:word-length 1
                         :num-pins 1
                         :connections [{}]}}
        outputs {:q {:word-length 8
                        :num-pins 1}}]
    {:id id :label id :species "register"
     :inputs inputs :outputs outputs :state {:data [false]}}))

(defn build-inputpin [id]
  (let [
        outputs {:q {:word-length 1
                     :num-pins 1}}]
    {:id id :label id :species "inputpin"
     :inputs {} :outputs outputs :state {:data [false]}}))

(defn build-outputpin [id]
  (let [
        outputs {:q {:word-length 1
                     :num-pins 1}}]
    {:id id :value [false]  :label id :species "outputpin"
     :inputs {:data {:word-length 1
                     :num-pins 1
                     :connections [{}]}} :outputs outputs :state {}})) 

;; TODO If I had time, I'd use multimethods for this, but
;; I'm in a hurry so switch statement will do
(defn build-component [species id]
  (let [build-fn 
        (cond
          (= species "andgate") build-andgate
          (= species "nandgate") build-nandgate
          (= species "orgate") build-orgate
          (= species "norgate") build-norgate
          (= species "xorgate") build-xorgate
          (= species "xnorgate") build-xnorgate
          (= species "mux") build-mux
          (= species "decoder") build-decoder
          (= species "notgate") build-notgate
          (= species "dflipflop") build-dff
          (= species "tflipflop") build-tff
          (= species "register") build-register
          (= species "inputpin") build-inputpin
          (= species "outputpin") build-outputpin
          )]
    (build-fn id)))
