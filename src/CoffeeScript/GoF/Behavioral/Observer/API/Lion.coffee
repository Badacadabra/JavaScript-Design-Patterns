'use strict'

Predator = require './Predator'

# ==============================
# CONCRETE OBSERVER
# ==============================

class Lion extends Predator
    attack: ->
        "Lion attack!\n"

module.exports = Lion
