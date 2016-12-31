'use strict'

Off = require './Off'
On = require './On'

# ==============================
# CONCRETE CONTEXT
# ==============================

class Computer
    constructor: ->
        @_currentState = null
        @_states =
            off: new Off
            on: new On

    power: ->
        @_currentState.power(@) 

    getCurrentState: ->
        @_currentState

    setCurrentState: (state) ->
        @_currentState = state

    getStates: ->
        @_states

module.exports = Computer
