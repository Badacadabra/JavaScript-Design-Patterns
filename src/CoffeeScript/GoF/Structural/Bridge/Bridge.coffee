# ==============================
# ABSTRACTIONS
# ==============================

class Recipe
    constructor: (sauce) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Recipe
        @_sauce = sauce   

    cook: ->
        throw new Error "You cannot call an abstract class!"

class Sauce
    constructor: ->
        throw new Error "You cannot call an abstract method!" if @constructor is Sauce

    ingredients: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE RECIPES
# ==============================

class Pasta extends Recipe
    cook: ->
        "Pasta with #{@_sauce.ingredients()}"

class Risotto extends Recipe
    cook: ->
        "Risotto with #{@_sauce.ingredients()}"

# ==============================
# CONCRETE SAUCES
# ==============================

class Pesto extends Sauce
    ingredients: ->
        "Pesto (basil, garlic, oil, grated cheese, pine nuts)"

class Carbonara extends Sauce
    ingredients: ->
        "Carbonara (eggs, bacon, black pepper, grated cheese)"

# ==============================
# CLIENT CODE
# ==============================

# Sauces
pesto = new Pesto
carbonara = new Carbonara

# Recipes
pasta = new Pasta pesto
risotto = new Risotto carbonara

console.log pasta.cook()
console.log risotto.cook()
