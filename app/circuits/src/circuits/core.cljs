(ns circuits.core
  (:require [circuits.validate :as valid]
            [circuits.comp-logic :as logic]
            [circuits.comp-builder :as build]
            [circuits.test-data :as t]))
(def state-atom (atom {}))

(defn set-state  [component-map]
  (reset! state-atom component-map))

(defn clear-state [] (reset! state-atom {}))

(defn generate-id  [species circuit]
  (let  [same-species  (filter #(=  (% :species) species)  (vals circuit))
         same-count  (count same-species)]
    (keyword  (str species same-count))))
(declare function-map gen-inputs)

(defn evaluate-component  [component]
  (.log js/console "evaluate component\n")
  (let  [component-type  (component :species)
         eval-fn  (function-map component-type)
         result (eval-fn component)]
    result))

(defn find-output-components [circuit]
  (into {} (map (fn [kvpair] (if (=
                                  ((val kvpair) :species)
                                  "outputpin")
                               (val kvpair))) circuit)))

(defn remove-component [id circuit]
  (dissoc circuit (keyword id)))

(defn evaluate  [state]
  (if (valid/validate-state state)
    (let [newstate  (reset! state-atom state)
          components (find-output-components newstate)
          result (map evaluate-component components)
          ]
      {:result result :state @state-atom})
    nil))

(defn add-component [species circuit display]
  (let [new-id (generate-id species circuit)
        new-component (build/build-component species new-id)
        with-display (assoc new-component :display display)
        new-state (assoc circuit new-id with-display)
        ]
    new-state))

(defn add-connection [src dst input-circuit]
  (let [
        dstid (keyword (dst :id))
        dstfield (keyword (dst :field))
        srcid (keyword (src :id))
        srcfield (keyword (src :field))
        dst-component (input-circuit dstid)
        dst-inputs (dst-component :inputs)
        dst-field (dst-inputs dstfield)
        dst-vector (dst-field :connections)

        dst-index (dst :index)
        new-connection {:source-id srcid
                        :source-field srcfield}
        new-invec (assoc dst-vector dst-index new-connection)
        new-circuit (assoc-in input-circuit [
                                             dstid
                                             :inputs
                                             dstfield
                                             :connections]
                              new-invec)]
    new-circuit))

(defn remove-connection [src dst circuit]
  (let [dst-component (circuit (dst :id))
        dst-inputs (dst-component :inputs)
        dst-field (dst-inputs (dst :field))
        dst-vector (dst-field :connections)
        dst-index (dst :index)
        new-invec (assoc dst-vector dst-index {})
        new-circuit (assoc-in circuit [
                                       (dst :id)
                                       :inputs
                                       (dst :field)
                                       :connections]
                              new-invec)]
    new-circuit))

(defn inner-fn  [mapping]
  (let  [source-component  (@state-atom (keyword (mapping :source-id)))
         eval-fn  (function-map  (source-component :species))
         the-outputs  (eval-fn source-component)
         result (the-outputs (keyword (mapping :source-field)))]
    result))
(defn gen-input-field  [kvpair]
  {(key kvpair)  (doall (map inner-fn  ((val kvpair) :connections)))})

(defn gen-inputs  [component]
  (let  [input-maps  (component :inputs)
         input-fields  (doall (map gen-input-field input-maps))
         result (if (> (count input-fields) 1)
                  (apply conj input-fields)
                  (first input-fields))]
    result))

;; Eval functions for every component

(defn and-eval  [andgate]
  (let [inputs (gen-inputs andgate)]
    {:q (logic/do-and (inputs :data))}))
(defn nand-eval [nandgate]
  (let [and-value (and-eval nandgate)
        negated (not and-value)]
    {:q negated}))
(defn or-eval [orgate]
  (let [inputs (gen-inputs orgate)]
    {:q (logic/do-or (inputs :data))}))
(defn nor-eval [norgate]
  (let [or-value (or-eval norgate)
        negated (not or-value)]
    {:q negated}))

(defn xor-eval [xorgate]
  (let [inputs (gen-inputs xorgate)]
    {:q (logic/do-xor (inputs :data))}))
(defn xnor-eval [xnorgate]
  (let [xor-value (xor-eval xnorgate)
        negated (not xor-value)]
    {:q negated}))

;; TODO consider enable
(defn decoder-eval [decoder]
  (let [input (gen-inputs decoder)]
    {:q (logic/do-decode (input :data))}))

(defn mux-eval  [mux]
  (let  [inputs  (gen-inputs mux)
         data  (inputs :data)
         control  (flatten  (inputs :control))
         result (logic/do-mux data control)]
    {:q result}))
(defn not-eval [notgate]
  (let [inputs (gen-inputs notgate)
        data (:data inputs)
        only-one (first data)]
    {:q (vec (map not only-one))}))

;; Memory Components
(defn register-eval [register]
  (let [state (register :state)
        data (state :data)
        inputs (gen-inputs register)
        enabled (inputs :enable)]
    (if enabled
      (let [updated-state (assoc state :data (first (inputs :data)))
            updated-register (assoc register :state updated-state)]
        (swap! state-atom assoc (register :id) updated-register)))
    {:q data}))

(defn d-flipflop-eval [dff]
  (.log js/console "dff eval\n")
  (let [state (dff :state)
        data (state :data)
        inputs (gen-inputs dff)
        enabled (inputs :enable)]
    (if enabled
      (let [updated-state (assoc state :data (vec (first (inputs :data))))
            updated-dff (assoc dff :state updated-state)
            updated-state (assoc @state-atom (keyword (dff :id)) updated-dff)]
        (reset! state-atom updated-state)))
    (.log js/console (str "during\n" ((@state-atom :dflipflop0) :state)))
    {:q data :q-bar (vec (map not data))}))
(defn t-flipflop-eval [tff]
  (let [state (tff :state)
        data (state :data)
        inputs (gen-inputs tff)
        enabled (inputs :enable)]
    (if enabled
      (let [updated-state (assoc state :data (vec (map not data)))
            updated-tff (assoc tff :state updated-state)]
        (swap! state-atom assoc (tff :id) updated-tff)))
    {:q data :q-bar (vec (map not data))}))
(defn inputpin-eval  [inputpin]
  (let  [state  (inputpin :state)
         data  (state :data)]
    {:q data}))
(defn outputpin-eval [outputpin]
  (let [inputs (gen-inputs outputpin)]
    inputs))

(def function-map  {"notgate" not-eval
                    "andgate" and-eval
                    "nandgate" nand-eval
                    "orgate" or-eval
                    "norgate" nor-eval
                    "xorgate" xor-eval
                    "xnorgate" xnor-eval
                    "decoder" decoder-eval
                    "mux" mux-eval
                    "register" register-eval
                    "dflipflop" d-flipflop-eval
                    "tflipflop" t-flipflop-eval
                    "inputpin" inputpin-eval
                    "outputpin" outputpin-eval
                    })
