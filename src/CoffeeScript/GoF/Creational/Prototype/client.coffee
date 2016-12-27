'use strict'

Invoice = require './API/Invoice'

# ==============================
# CLIENT CODE 
# ==============================

invoice = new Invoice 42, "€"
copy = invoice.photocopy()

console.log copy.price # 42 
console.log copy.currency # €
console.log copy is invoice # false (the copy is not the original invoice: it is a new object!)
