'use strict'

Lion = require './API/Lion'
Crocodile = require './API/Crocodile'
Gazelle = require './API/Gazelle'

# ==============================
# CLIENT CODE
# ==============================

lion = new Lion
crocodile = new Crocodile
gazelle = new Gazelle

gazelle.addPredator lion
gazelle.addPredator crocodile

console.log gazelle.notifyPredators()
