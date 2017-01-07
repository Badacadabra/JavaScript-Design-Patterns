'use strict'

# ==============================
# ABSTRACT ANIMAL
# ==============================

class Animal
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Animal

    eat: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Animal
