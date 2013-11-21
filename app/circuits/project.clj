(defproject circuits "0.1.0-ALPHA"
  :description "Real-Time collaborative circuit designer!"
  :url "http://circuitswithfriends.com"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2030"]]

  :plugins [[lein-cljsbuild "1.0.0-alpha2"]]
  :cljsbuild {
              :builds [{:id "debug"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "circuits.js"
                                   :output-dir "out"
                                   :optimizations :whitespace
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "../../public/js/circuits.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       ]})
