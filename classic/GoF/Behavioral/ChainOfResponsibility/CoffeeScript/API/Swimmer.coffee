'use strict'

Racer = require './Racer'

# ==============================
# CONCRETE RACER
# ==============================

class Swimmer extends Racer
    go: ->
        "Swimmer: go!\n#{super}"

module.exports = Swimmer
