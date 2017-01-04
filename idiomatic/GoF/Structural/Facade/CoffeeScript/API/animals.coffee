'use strict'

# ==============================
# ANIMALS
# ==============================

dog =
    eat: -> 
        "Dog: 'Meat, please!'\n"

rabbit =
    eat: ->
        "Rabbit: 'A carrot would be great!'\n"

module.exports =
    dog: dog
    rabbit: rabbit
