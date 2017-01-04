'use strict'

# ==============================
# PROTOTYPE
# ==============================

module.exports = (invoice) -> 
    # Here we suppose invoice properties are always enumerable, writable and configurable.
    # If not, we should use Object.defineProperty() along with Object.getOwnPropertyDescriptor().
    clone = Object.create Object.getPrototypeOf invoice
    clone[prop] = invoice[prop] for prop of invoice
    clone
