'use strict'

Animal = require './Animal'

# ==============================
# CONCRETE ANIMAL
# ==============================

class Rabbit extends Animal
    eat: ->
        "Rabbit: 'A carrot would be great!'\n"

module.exports = Rabbit
