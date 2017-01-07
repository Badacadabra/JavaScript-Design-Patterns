'use strict'

ComputerState = require './ComputerState'

# ==============================
# CONCRETE STATE
# ==============================

class Off extends ComputerState
    power: (pc) -> 
        pc.setCurrentState pc.getStates().on

module.exports = Off
