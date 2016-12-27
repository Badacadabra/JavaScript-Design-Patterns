'use strict'

Dog = require './Dog'
Rabbit = require './Rabbit'

# ==============================
# THE FACADE 
# ==============================

class HowToFeedAnimals
    constructor: ->
        @_dog = new Dog
        @_rabbit = new Rabbit

    feedAnimals: ->
        "#{@_dog.eat()}#{@_rabbit.eat()}"

module.exports = HowToFeedAnimals
