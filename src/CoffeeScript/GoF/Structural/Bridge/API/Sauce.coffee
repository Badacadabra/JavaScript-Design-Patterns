'use strict'

# ==============================
# ABSTRACTION
# ==============================

class Sauce
    constructor: ->
        throw new Error "You cannot call an abstract method!" if @constructor is Sauce

    ingredients: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Sauce
