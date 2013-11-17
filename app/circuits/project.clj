(defproject circuits "0.1.0-ALPHA"
  :url "http://circuitswithfriends.com"
  :license  {:name "Eclipse Public License"
             :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins  [[lein-autoexpect "1.0"]
             [lein-cljsbuild "1.0.0-alpha2"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs/circuits"]
                        :compiler {:output-to "circuits.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]
              :crossovers [circuits.core
                           circuits.validate
                           circuits.comp-logic
                           circuits.test-data]
              :crossover-path "src-cljs/"
              :crossover-jar false} 
  
  :dependencies  [[org.clojure/clojure "1.5.1"]
                  [org.clojure/clojurescript "0.0-2014"]
                  ;[org.clojure/algo.monads "0.1.4"]
                  [org.clojure/math.numeric-tower "0.0.2"]
                  [expectations "1.4.56"]
                  ])
