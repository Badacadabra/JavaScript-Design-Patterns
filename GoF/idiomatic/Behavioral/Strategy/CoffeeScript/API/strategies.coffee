'use strict'

# ==============================
# STRATEGIES 
# ==============================

offense =
    fight: -> 
        "Fight with an offensive style"

defense =
    fight: -> 
        "Fight with a defensive style"

module.exports =
    offense: offense
    defense: defense
