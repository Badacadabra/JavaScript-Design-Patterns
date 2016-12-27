'use strict'

Strategy = require './Strategy'

# ==============================
# CONCRETE STRATEGY
# ==============================

class Defense extends Strategy
    fight: ->
        "Fight with a defensive style"

module.exports = Defense
