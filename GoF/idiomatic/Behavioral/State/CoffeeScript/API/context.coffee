'use strict'

power = require './states'

# ==============================
# CONTEXT (PC)
# ==============================

module.exports =
    currentState: null
    states:
        OFF: power.OFF
        ON: power.ON
    power: -> 
        @currentState.power(@)
