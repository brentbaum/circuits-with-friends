(ns circuits.js
  (:require [circuits.core :as core]))

(defn map-json [obj]
  (js->clj obj :keywordize-keys true))

; External Interface Functions

(defn add-component-js [species circuit display]
  (let [circuit-map (map-json circuit)
        display-map (map-json display)]
    (clj->js (core/add-component species circuit-map display-map))))
(defn add-connection-js [src dst circuit]
  (let [src-map (map-json src)
        dst-map (map-json dst)
        circuit-map (map-json circuit)]
    (clj->js (core/add-connection src-map dst-map circuit-map))))
(defn remove-connection-js [src dst circuit]
  )
(defn evaluate-js [id circuit]
  (clj->js (core/evaluate id (js->clj circuit))))


; End External Interface FNs
