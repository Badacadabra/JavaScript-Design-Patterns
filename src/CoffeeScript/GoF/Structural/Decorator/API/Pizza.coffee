'use strict'

# ==============================
# ABSTRACT PIZZA
# ==============================

class Pizza
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Pizza

    ingredients: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Pizza
