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

# ==============================
# CONTEXT
# ==============================

pc =
    currentState: null
    states:
        OFF: OFF
        ON: ON
    power: -> 
        @currentState.power(@)

# ==============================
# TEST 
# ==============================

pc.currentState = pc.states.OFF

console.log pc.currentState.name # off
pc.power()
console.log pc.currentState.name # on
pc.power()
console.log pc.currentState.name # off
