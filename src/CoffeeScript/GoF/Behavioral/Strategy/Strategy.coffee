# ==============================
# CONCRETE CONTEXT 
# ==============================

class FightingGame
    constructor: ->
        @_strategy = null

    play: ->
        @_strategy.fight() 

    setStrategy: (fightStyle) ->
        @_strategy = fightStyle

# ==============================
# ABSTRACT STRATEGY 
# ==============================

class Strategy
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Strategy

    fight: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE STRATEGIES 
# ==============================

class Offense extends Strategy
    fight: ->
        "Fight with an offensive style"

class Defense extends Strategy
    fight: ->
        "Fight with a defensive style"

# ==============================
# CLIENT CODE
# ==============================

game = new FightingGame
offense = new Offense
defense = new Defense

game.setStrategy defense
console.log "ROUND 1 - #{game.play()}"
game.setStrategy offense
console.log "ROUND 2 - #{game.play()}"
