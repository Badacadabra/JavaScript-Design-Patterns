'use strict'

monument = require './API/monuments'
tourist = require './API/visitor'

# ==============================
# CLIENT CODE 
# ==============================

castle = monument 'Castle'
abbey = monument 'Abbey'

console.log castle.accept tourist
console.log abbey.accept tourist
