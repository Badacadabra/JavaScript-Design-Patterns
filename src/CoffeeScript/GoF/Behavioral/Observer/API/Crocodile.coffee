'use strict'

Predator = require './Predator'

# ==============================
# CONCRETE OBSERVER
# ==============================

class Crocodile extends Predator
    attack: ->
        "Crocodile attack!\n"

module.exports = Crocodile
