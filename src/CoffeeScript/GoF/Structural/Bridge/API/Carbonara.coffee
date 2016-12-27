'use strict'

Sauce = require './Sauce'

# ==============================
# CONCRETE SAUCES
# ==============================

class Carbonara extends Sauce
    ingredients: ->
        "Carbonara (eggs, bacon, black pepper, grated cheese)"

module.exports = Carbonara
