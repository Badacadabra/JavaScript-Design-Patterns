'use strict'

Toy = require './Toy'

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

module.exports = ToyBox
