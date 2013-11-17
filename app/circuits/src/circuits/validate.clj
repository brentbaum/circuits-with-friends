(ns circuits.validate)

(defn unique-keys? "Determines whether the given map has duplicate keys"
    [-map]
    (let  [keyss  (keys -map)]
          (=  (count keyss)  (count  (distinct keyss)))))

(defn validate-component  [component]
    )

(defn validate-state  [proposed-state]
    ;(let  [unique-keys?  (unique-keys? proposed-state)]
          ;(every? true?  [unique-keys? ,,,])))
  true)
