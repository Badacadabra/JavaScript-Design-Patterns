'use strict'

Castle = require './API/Castle'
Abbey = require './API/Abbey'
Tourist = require './API/Tourist'

# ==============================
# CLIENT CODE
# ==============================

castle = new Castle
abbey = new Abbey
tourist = new Tourist

console.log castle.accept tourist
console.log abbey.accept tourist
