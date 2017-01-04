'use strict'

# ==============================
# SIMPLE COMPONENT
# ==============================

# A ball does not contain anything
createBall = ->
    description: -> 
        "There's a ball!\n"

# ==============================
# COMPOSITE COMPONENT
# ==============================

# A toy box is a toy entity which contains toys, including smaller toy boxes
createToyBox = -> 
    toys: []
    description: -> 
        "There's a toy box!\n"
    add: (toy) ->
        @toys.push toy
    inventory: -> 
        inventory = "Let's open the toy box...\n"
        for toy in @toys
            inventory += toy.description()
            inventory += toy.inventory() if toy.hasOwnProperty "toys"
        inventory

module.exports =
    ball: createBall
    box: createToyBox
