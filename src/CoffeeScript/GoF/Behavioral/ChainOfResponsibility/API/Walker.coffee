'use strict'

Racer = require './Racer'

# ==============================
# CONCRETE RACER
# ==============================

class Walker extends Racer
    go: ->
        "Walker: go!\n#{super}"

module.exports = Walker
