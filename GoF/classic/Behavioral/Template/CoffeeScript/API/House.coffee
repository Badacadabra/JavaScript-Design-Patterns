'use strict'

Home = require './Home'

# ==============================
# CONCRETE HOME
# ==============================

class House extends Home
    foundations: ->
        "House foundations"

    walls: ->
        "House walls"

    roof: ->
        "House roof"

module.exports = House
