'use strict'

pizza = require './API/pizza'

# ==============================
# CLIENT CODE 
# ==============================

console.log pizza.peppers(pizza.bacon(pizza.margherita)).ingredients()
