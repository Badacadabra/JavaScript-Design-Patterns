'use strict'

# ==============================
# ABSTRACT ORDER
# ==============================

class Order
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Order

    deliver: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Order
