'use strict'

sauces = require './API/sauces'
recipes = require './API/recipes'

# ==============================
# CLIENT CODE
# ==============================

console.log recipes.pasta(sauces.pesto).cook()
console.log recipes.risotto(sauces.carbonara).cook()
