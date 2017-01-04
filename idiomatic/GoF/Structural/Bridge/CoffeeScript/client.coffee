'use strict'

# ==============================
# SAUCES
# ==============================

pesto =
    ingredients: -> 
        "Pesto (basil, garlic, oil, grated cheese, pine nuts)"

carbonara =
    ingredients: ->
        "Carbonara (eggs, bacon, black pepper, grated cheese)"

# ==============================
# RECIPES
# ==============================

pasta = (sauce) ->
    cook: -> 
        "Pasta with #{sauce.ingredients()}"

risotto = (sauce) ->
    cook: -> 
        "Risotto with #{sauce.ingredients()}"

# ==============================
# CLIENT CODE
# ==============================

console.log pasta(pesto).cook()
console.log risotto(carbonara).cook()
