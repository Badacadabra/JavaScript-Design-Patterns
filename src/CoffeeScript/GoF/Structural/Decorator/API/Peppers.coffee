'use strict'

CustomPizza = require './CustomPizza'

# ==============================
# PIZZA INGREDIENT
# ==============================

class Peppers extends CustomPizza
    ingredients: ->
        "#{@_pizza.ingredients()}- Peppers\n"

module.exports = Peppers
