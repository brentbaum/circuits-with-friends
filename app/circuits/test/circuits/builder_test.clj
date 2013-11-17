(ns circuits.builder-test
  (:require [expectations :refer :all]
            [circuits.comp-builder :refer :all]
            [circuits.test-data :as t]))
(expect t/stock-mux (build-component "mux" {}))
(expect t/stock-andgate (build-component "andgate" {}))
(expect t/stock-nandgate (build-component "nandgate" {}))
