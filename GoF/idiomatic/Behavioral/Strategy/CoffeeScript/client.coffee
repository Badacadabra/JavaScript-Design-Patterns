'use strict'

fightingGame = require './API/context'
strategies = require './API/strategies'

# ==============================
# CLIENT CODE 
# ==============================

fightingGame.strategy = strategies.defense
console.log "ROUND 1 - #{fightingGame.play()}"
fightingGame.strategy = strategies.offense
console.log "ROUND 2 - #{fightingGame.play()}"
