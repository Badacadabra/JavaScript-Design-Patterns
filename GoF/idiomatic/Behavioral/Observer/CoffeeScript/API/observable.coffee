'use strict'

# ==============================
# OBSERVABLE (GAZELLE)
# ==============================

module.exports =
    predators: []
    addPredator: (predator) ->
        @predators.push predator
    notifyPredators: -> 
        situation = ""
        situation += predator.attack() for predator in @predators 
        situation
