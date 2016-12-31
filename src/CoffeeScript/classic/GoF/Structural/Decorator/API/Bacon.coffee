'use strict'

CustomPizza = require './CustomPizza'

# ==============================
# PIZZA INGREDIENT
# ==============================

class Bacon extends CustomPizza
    ingredients: ->
        "#{@_pizza.ingredients()}- Bacon\n"

module.exports = Bacon
