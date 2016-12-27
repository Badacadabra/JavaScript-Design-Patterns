'use strict'

Sauce = require './Sauce'

# ==============================
# CONCRETE SAUCES
# ==============================

class Pesto extends Sauce
    ingredients: ->
        "Pesto (basil, garlic, oil, grated cheese, pine nuts)"

module.exports = Pesto
