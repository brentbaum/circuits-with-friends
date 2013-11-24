(ns circuits.validate)

(defn unique-keys? "Determines whether the given map has duplicate keys"
    [-map]
    (let  [keyss  (keys -map)]
          (=  (count keyss)  (count  (distinct keyss)))))

(defn validate-connection [src dst circuit]
  )

(defn validate-state  [circuit]
    ;(let  [unique-keys?  (unique-keys? proposed-state)]
          ;(every? true?  [unique-keys? ,,,])))
  true)
