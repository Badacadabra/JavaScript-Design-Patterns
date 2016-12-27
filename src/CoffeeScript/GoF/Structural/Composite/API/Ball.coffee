'use strict'

Toy = require './Toy'

# ==============================
# SIMPLE (CONCRETE) COMPONENT
# ==============================

# A ball does not contain anything
class Ball extends Toy
    description: ->
        "There's a ball!\n"

module.exports = Ball
