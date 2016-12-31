'use strict'

# ==============================
# OBSERVERS 
# ==============================

lion =
    attack: -> 
        "Lion attack!\n"

crocodile =
    attack: ->
        "Crocodile attack!\n"

# ==============================
# OBSERVABLE
# ==============================

gazelle =
    predators: []
    addPredator: (predator) ->
        @predators.push predator
    notifyPredators: -> 
        situation = ""
        situation += predator.attack() for predator in @predators 
        situation

# ==============================
# TEST 
# ==============================

gazelle.addPredator lion
gazelle.addPredator crocodile

console.log gazelle.notifyPredators()
