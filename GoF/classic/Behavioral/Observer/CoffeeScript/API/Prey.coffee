'use strict'

# ==============================
# ABSTRACT OBSERVABLE 
# ==============================

class Prey
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Prey
        @_predators = []

    addPredator: (predator) ->
        @_predators.push predator

    notifyPredators: ->
        situation = ""
        situation += predator.attack() for predator in @_predators
        situation

module.exports = Prey
