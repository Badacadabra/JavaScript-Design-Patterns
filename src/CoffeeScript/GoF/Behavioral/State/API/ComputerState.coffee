'use strict'

# ==============================
# ABSTRACT STATE
# ==============================

class ComputerState
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is ComputerState

    power: (pc) -> 
        throw new Error "You cannot call an abstract method!"

module.exports = ComputerState
