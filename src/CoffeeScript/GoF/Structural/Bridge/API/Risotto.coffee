'use strict'

Recipe = require './Recipe'

# ==============================
# CONCRETE RECIPE
# ==============================

class Risotto extends Recipe
    cook: ->
        "Risotto with #{@_sauce.ingredients()}"

module.exports = Risotto
