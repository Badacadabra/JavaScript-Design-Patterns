'use strict'

Pizza = require './Pizza'

# ==============================
# CONCRETE PIZZA
# ==============================

class Margherita extends Pizza
    ingredients: ->
        "- Tomatoes\n- Mozzarella\n"

module.exports = Margherita
