'use strict'

build = require './API/template'
homes = require './API/homes'

# ==============================
# CLIENT CODE 
# ==============================

console.log build homes.house
console.log build homes.building
