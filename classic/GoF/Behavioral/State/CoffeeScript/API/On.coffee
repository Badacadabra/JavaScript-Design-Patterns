'use strict'

ComputerState = require './ComputerState'

# ==============================
# CONCRETE STATE
# ==============================

class On extends ComputerState
    power: (pc) -> 
        pc.setCurrentState pc.getStates().off

module.exports = On
