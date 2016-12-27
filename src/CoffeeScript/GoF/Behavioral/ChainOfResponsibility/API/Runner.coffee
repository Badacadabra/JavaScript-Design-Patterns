'use strict'

Racer = require './Racer'

# ==============================
# CONCRETE RACER
# ==============================

class Runner extends Racer
    go: ->
        "Runner: go!\n#{super}"

module.exports = Runner
