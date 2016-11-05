"use strict"

# ==============================
# ABSTRACT PROTOTYPE
# ==============================

class PaperSheet
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is PaperSheet

    photocopy: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE PROTOTYPE
# ==============================

class Invoice extends PaperSheet
    constructor: (@price, @currency) ->

    photocopy: ->
        clone = Object.create Object.getPrototypeOf @
        for own key, val of @
            clone[key] = val
        clone

# ==============================
# CLIENT CODE 
# ==============================

invoice = new Invoice 42, "€"
copy = invoice.photocopy()

console.log copy.price # 42 
console.log copy.currency # €
console.log copy is invoice # false (the copy is not the original invoice: it is a new object!)
