(ns circuits.builder-test
  (:require [expectations :refer :all]
            [circuits.comp-builder :refer :all]
            [circuits.test-data :as t]))
(expect t/stock-mux (build-component "mux" :a))
(expect t/stock-andgate (build-component "andgate" :a))
(expect t/stock-nandgate (build-component "nandgate" :a))
(build-component "register" :asdf)
