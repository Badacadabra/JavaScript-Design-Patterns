'use strict'

photocopy = require './API/photocopy'

# ==============================
# CLIENT CODE 
# ==============================

invoice =
    price: 42
    currency: "€"

copy = photocopy invoice

console.log copy.price # 42 
console.log copy.currency # €
console.log copy is invoice # false (the copy is not the original invoice: it is a new object!)
