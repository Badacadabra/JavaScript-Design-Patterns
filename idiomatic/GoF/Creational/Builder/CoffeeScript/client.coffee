'use strict'

manufacturer = require './API/manufacturer'
geek = require './API/builder'

# ==============================
# CLIENT CODE 
# ==============================

myPc = manufacturer.manufacture geek

console.log myPc
