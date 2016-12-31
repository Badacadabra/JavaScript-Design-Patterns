'use strict'

Computer = require './API/Computer'

# ==============================
# CLIENT CODE
# ==============================

pc = new Computer

pc.setCurrentState pc.getStates().off

console.log pc.getCurrentState().constructor.name # Off
pc.power()
console.log pc.getCurrentState().constructor.name # On
pc.power()
console.log pc.getCurrentState().constructor.name # Off
