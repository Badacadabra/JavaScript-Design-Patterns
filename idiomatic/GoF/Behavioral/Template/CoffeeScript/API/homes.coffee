'use strict'

# ==============================
# HOMES 
# ==============================

house =
    foundations: -> 
        "House foundations"
    walls: -> 
        "House walls"
    roof: -> 
        "House roof"

building =
    foundations: -> 
        "Apartment building foundations"
    walls: -> 
        "Apartment building walls"
    roof: -> 
        "Apartment building roof"

module.exports =
    house: house
    building: building
