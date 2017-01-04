'use strict'

# ==============================
# PIZZA
# ==============================

margherita =
    ingredients: -> 
        "- Tomatoes\n- Mozzarella\n"

# ==============================
# DECORATORS (INGREDIENTS)
# ==============================

addBacon = (pizza) -> 
    ingredients: -> 
        "#{pizza.ingredients()}- Bacon\n"

addPeppers = (pizza) ->
    ingredients: -> 
        "#{pizza.ingredients()}- Peppers\n"

module.exports =
    margherita: margherita
    bacon: addBacon
    peppers: addPeppers
