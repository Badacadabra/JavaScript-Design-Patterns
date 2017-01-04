'use strict'

# ==============================
# CONTEXT 
# ==============================

fightingGame =
    strategy: null
    play: -> 
        @strategy.fight()

# ==============================
# STRATEGIES 
# ==============================

offense =
    fight: -> 
        "Fight with an offensive style"

defense =
    fight: -> 
        "Fight with a defensive style"

# ==============================
# TEST 
# ==============================

fightingGame.strategy = defense
console.log "ROUND 1 - #{fightingGame.play()}"
fightingGame.strategy = offense
console.log "ROUND 2 - #{fightingGame.play()}"
