# ==============================
# ABSTRACT OBSERVER 
# ==============================

class Predator
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Predator

    attack: ->
        throw new Error "You cannot call an abstract method!"

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

# ==============================
# CONCRETE OBSERVERS 
# ==============================

class Lion extends Predator
    attack: ->
        "Lion attack!\n"

class Crocodile extends Predator
    attack: ->
        "Crocodile attack!\n"

# ==============================
# CONCRETE OBSERVABLES
# ==============================

class Gazelle extends Prey
    constructor: ->
        super

# ==============================
# CLIENT CODE
# ==============================

lion = new Lion
crocodile = new Crocodile
gazelle = new Gazelle

gazelle.addPredator lion
gazelle.addPredator crocodile

console.log gazelle.notifyPredators()
