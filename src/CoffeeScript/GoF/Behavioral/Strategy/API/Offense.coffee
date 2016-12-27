'use strict'

Strategy = require './Strategy'

# ==============================
# CONCRETE STRATEGY
# ==============================

class Offense extends Strategy
    fight: ->
        "Fight with an offensive style"

module.exports = Offense
