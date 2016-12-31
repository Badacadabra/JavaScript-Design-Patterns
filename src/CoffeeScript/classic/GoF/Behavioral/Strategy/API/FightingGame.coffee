'use strict'

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

module.exports = FightingGame
