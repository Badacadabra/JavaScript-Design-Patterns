'use strict'

# ==============================
# PROTOTYPE
# ==============================

photocopy = (invoice) -> 
    # Here we suppose invoice properties are always enumerable, writable and configurable.
    # If not, we should use Object.defineProperty() along with Object.getOwnPropertyDescriptor().
    clone = Object.create Object.getPrototypeOf invoice
    clone[prop] = invoice[prop] for prop of invoice
    clone

invoice =
    price: 42
    currency: "€"

# ==============================
# TEST 
# ==============================

copy = photocopy invoice

console.log copy.price # 42 
console.log copy.currency # €
console.log copy is invoice # false (the copy is not the original invoice: it is a new object!)
