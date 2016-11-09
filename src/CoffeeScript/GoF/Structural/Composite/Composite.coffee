"use strict"

# ==============================
# ABSTRACT COMPONENT
# ==============================

class Toy
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Toy

    description: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# SIMPLE (CONCRETE) COMPONENT
# ==============================

# A ball does not contain anything
class Ball extends Toy
    description: ->
        "There's a ball!\n"

# ==============================
# COMPOSITE (CONCRETE) COMPONENT
# ==============================

# A toy box is a toy entity which contains toys, including smaller toy boxes
class ToyBox extends Toy
    constructor: ->
        @_toys = []

    description: ->
        "There's a toy box!\n"

    add: (toy) ->
        @_toys.push(toy)

    inventory: ->
        inventory = "Let's open the toy box...\n"
        for toy in @_toys
            inventory += toy.description()
            if toy instanceof ToyBox
                inventory += toy.inventory()
        inventory

# ==============================
# CLIENT CODE
# ==============================

# Here we organize our toys in an optimal way
ball1 = new Ball
ball2 = new Ball
ball3 = new Ball
bigToyBox = new ToyBox
smallToyBox = new ToyBox

smallToyBox.add ball1
bigToyBox.add ball2
bigToyBox.add ball3
bigToyBox.add smallToyBox

# Now we open our big toy box...
console.log bigToyBox.inventory()
