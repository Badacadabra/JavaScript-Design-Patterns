'use strict'

animals = require './animals'

# ==============================
# THE FACADE 
# ==============================

module.exports =
    dog: animals.dog
    rabbit: animals.rabbit
    feedAnimals: -> 
        "#{@dog.eat()}#{@rabbit.eat()}"
