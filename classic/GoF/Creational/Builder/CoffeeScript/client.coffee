'use strict'

Geek = require './API/Geek'
Manufacturer = require './API/Manufacturer'

# ==============================
# CLIENT CODE 
# ==============================

geek = new Geek
pc = Manufacturer.manufacture geek

console.log pc
