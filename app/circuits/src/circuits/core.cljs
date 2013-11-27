(ns circuits.core
  (:require [circuits.validate :as valid]
            [circuits.comp-logic :as logic]
            [circuits.comp-builder :as build]
            [circuits.test-data :as t]
            [clojure.browser.repl :as repl]))
;(repl/connect "http://localhost:9000/repl")

(def state-atom (atom {}))
(def state-buffer (atom {}))
(def eval-cache (atom {}))

(defn set-state  [component-map]
  (reset! state-atom component-map))

(defn clear-state [] (reset! state-atom {}))

(defn generate-id  [species circuit]
  (let  [same-species  (filter #(=  (% :species) species)  (vals circuit))
         same-count  (count same-species)]
    (keyword (str species same-count))))
(declare function-map gen-inputs)

(defn evaluate-component  [component]
  (let  [component-type  (component :species)
         eval-fn  (function-map component-type)
         result (eval-fn component)]
    {(keyword (component :id)) result}))

(defn find-output-components [circuit]
  (into {} (filter #(= "outputpin" ((val %) :species)) circuit)))

(defn remove-component [id circuit]
  (dissoc circuit (keyword id)))

(defn evaluate  [state]
  (if (valid/validate-state state)
    (let [newstate  (reset! state-atom state)
          cleared-cache (reset! eval-cache {})
          cleared-state-buffer (reset! state-buffer {})
          components (find-output-components newstate)
          result (doall (map evaluate-component (vals components)))
          flattened (into {} result)
          final-state (into @state-atom @state-buffer)
          ]
      {:result flattened :state final-state})
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
        ; testt (-> dstid input-circuit :inputs dstfield :connections)
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

(defn inner-fn [mapping]
  (let [source-component (@state-atom (keyword (mapping :source-id)))
        eval-fn  (function-map (source-component :species))
        the-outputs (eval-fn source-component)
        result (the-outputs (keyword (mapping :source-field)))]
    result))
(defn gen-input-field [kvpair]
  {(key kvpair) (doall (map inner-fn  ((val kvpair) :connections)))})

(defn get-inputs [component]
  (let [lookup-result (@eval-cache (keyword (component :id)))]
    (if lookup-result
      lookup-result
      (gen-inputs component))))

(defn gen-inputs [component]
  (let [input-maps (component :inputs)
        input-fields (doall (map gen-input-field input-maps))
        result (if (> (count input-fields) 1)
                 (apply conj input-fields)
                 (first input-fields))]
    ;; Update eval-cache to we don't double-evaluate components
    (swap! eval-cache assoc (keyword (component :id)) result)
    result))

;; Eval functions for every component

(defn and-eval  [andgate]
  (let [inputs (get-inputs andgate)]
    {:q (logic/do-and (inputs :data))}))
(defn nand-eval [nandgate]
  (let [and-value (and-eval nandgate)
        negated (not and-value)]
    {:q negated}))
(defn or-eval [orgate]
  (let [inputs (get-inputs orgate)]
    {:q (logic/do-or (inputs :data))}))
(defn nor-eval [norgate]
  (let [or-value (or-eval norgate)
        negated (not or-value)]
    {:q negated}))

(defn xor-eval [xorgate]
  (let [inputs (get-inputs xorgate)]
    {:q (logic/do-xor (inputs :data))}))
(defn xnor-eval [xnorgate]
  (let [xor-value (xor-eval xnorgate)
        negated (not xor-value)]
    {:q negated}))

;; TODO consider enable
(defn decoder-eval [decoder]
  (let [input (get-inputs decoder)]
    {:q (logic/do-decode (input :data))}))

(defn mux-eval  [mux]
  (let  [inputs  (get-inputs mux)
         data  (inputs :data)
         control  (flatten  (inputs :control))
         result (logic/do-mux data control)]
    {:q result}))

(defn not-eval [notgate]
  (let [inputs (get-inputs notgate)
        data (:data inputs)
        only-one (first data)]
    {:q (vec (map not only-one))}))

;; Memory Components
(defn register-eval [register]
  (let [state (register :state)
        data (state :data)
        inputs (get-inputs register)
        enabled (inputs :enable)]
    (if enabled
      (let [updated-state (assoc state :data (first (inputs :data)))
            updated-register (assoc register :state updated-state)]
        (swap! state-buffer assoc (register :id) updated-register)))
    {:q (first (inputs :data))}))

(defn d-flipflop-eval [dff]
  (let [state (dff :state)
        data (state :data)
        inputs (get-inputs dff)
        enabled (inputs :enable)]
    (if enabled
      (let [updated-state (assoc state :data (vec (first (inputs :data))))
            updated-dff (assoc dff :state updated-state)
            updated-state (assoc @state-buffer (keyword (dff :id)) updated-dff)]
        (reset! state-buffer updated-state)))
    {:q (first (inputs :data)) :q-bar (vec (map not data))}))
;; TODO fix t flip flop so it doesn't toggle when T is 0
;; TODO also figure out why TFFs fail when there are 2 of them
(defn t-flipflop-eval [tff]
  (.log js/console (str "TFF eval called on component " (tff :id)))
  (let [state (tff :state)
        data (state :data)
        inputs (get-inputs tff)
        enabled (inputs :enable)]
    (if enabled
      (let [updated-state (assoc state :data (vec (map not data)))
            updated-tff (assoc tff :state updated-state)]
        (swap! state-buffer assoc (tff :id) updated-tff)))
    {:q (vec (map not data)) :q-bar (vec (map not data))}))
(defn inputpin-eval  [inputpin]
  (let  [state  (inputpin :state)
         data  (state :data)]
    {:q data}))
(defn outputpin-eval [outputpin]
  (let [inputs (gen-inputs outputpin)
        updated-outputpin (assoc outputpin :value (inputs :data))]
    (swap! state-buffer assoc (outputpin :id) updated-outputpin)
    (inputs :data)))

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
