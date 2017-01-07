'use strict'

House = require './API/House'
Building = require './API/Building'

# ==============================
# CLIENT CODE
# ==============================

house = new House
building = new Building

console.log house.build()
console.log building.build()
