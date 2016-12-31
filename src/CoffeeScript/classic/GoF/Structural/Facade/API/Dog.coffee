'use strict'

Animal = require './Animal'

# ==============================
# CONCRETE ANIMAL
# ==============================

class Dog extends Animal
    eat: ->
        "Dog: 'Meat, please!'\n"

module.exports = Dog
