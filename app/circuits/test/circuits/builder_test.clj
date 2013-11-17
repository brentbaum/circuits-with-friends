(ns circuits.builder-test
  (:require [expectations :refer :all]
            [circuits.comp-builder :refer :all]
            [circuits.test-data :as t]))
(build-component "register" :asdf)
