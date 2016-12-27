'use strict'

# ==============================
# ABSTRACT OBSERVER 
# ==============================

class Predator
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Predator

    attack: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Predator
