"use strict"

# ==============================
# ABSTRACT PIZZA
# ==============================

class Pizza
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Pizza

    ingredients: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE PIZZA
# ==============================

class Margherita extends Pizza
    ingredients: ->
        "- Tomatoes\n- Mozzarella\n"

# ==============================
# PIZZA DECORATOR
# ==============================

class CustomPizza extends Pizza
    constructor: (pizza) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is CustomPizza
        @_pizza = pizza

    ingredients: ->
        @_pizza.ingredients()

# ==============================
# PIZZA INGREDIENTS
# ==============================

class Bacon extends CustomPizza
    ingredients: ->
        "#{@_pizza.ingredients()}- Bacon\n"

class Peppers extends CustomPizza
    ingredients: ->
        "#{@_pizza.ingredients()}- Peppers\n"

# ==============================
# CLIENT CODE
# ==============================

console.log new Peppers(new Bacon(new Margherita())).ingredients()
