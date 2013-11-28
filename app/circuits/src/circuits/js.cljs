(ns circuits.js
  (:require [circuits.core :as core]))

(defn map-json [obj]
  (js->clj obj :keywordize-keys true))

; External Interface Functions

(defn ^:export add-component [species circuit display]
  (let [circuit-map (map-json circuit)
        display-map (map-json display)]
    (clj->js (core/add-component species circuit-map display-map))))

(defn ^:export add-connection [src dst circuit]
  (let [src-map (map-json src)
        dst-map (map-json dst)
        circuit-map (map-json circuit)]
    (clj->js (core/add-connection src-map dst-map circuit-map))))

(defn ^:export remove-connection [src dst circuit]
  )

(defn ^:export evaluate [circuit]
  (clj->js (core/evaluate (map-json circuit))))

(defn ^:export remove-component [id circuit]
  (clj->js (core/remove-component id (map-json circuit))))

(defn ^:export set-field [id circuit key- val-]
  (clj->js (core/set-field (keyword id) (map-json circuit) (keyword key-) val-)))
; End External Interface FNs
