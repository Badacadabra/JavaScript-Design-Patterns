'use strict'

Home = require './Home'

# ==============================
# CONCRETE HOME
# ==============================

class Building extends Home
    foundations: ->
        "Apartment building foundations"

    walls: ->
        "Apartment building walls"

    roof: ->
        "Apartment building roof"

module.exports = Building
