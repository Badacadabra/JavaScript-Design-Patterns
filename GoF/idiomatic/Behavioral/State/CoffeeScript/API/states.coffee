'use strict'

# ==============================
# STATES 
# ==============================

# "off" and "on" are reserved keywords in CoffeeScript

OFF =
    name: "off"
    power: (pc) ->
        pc.currentState = pc.states.ON

ON =
    name: "on"
    power: (pc) -> 
        pc.currentState = pc.states.OFF

module.exports =
    OFF: OFF
    ON: ON
