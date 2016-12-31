'use strict'

Pizza = require './Pizza'

# ==============================
# PIZZA DECORATOR
# ==============================

class CustomPizza extends Pizza
    constructor: (pizza) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is CustomPizza
        @_pizza = pizza

    ingredients: ->
        @_pizza.ingredients()

module.exports = CustomPizza
