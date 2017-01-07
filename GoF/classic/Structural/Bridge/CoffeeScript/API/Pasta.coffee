'use strict'

Recipe = require './Recipe'

# ==============================
# CONCRETE RECIPE
# ==============================

class Pasta extends Recipe
    cook: ->
        "Pasta with #{@_sauce.ingredients()}"

module.exports = Pasta
