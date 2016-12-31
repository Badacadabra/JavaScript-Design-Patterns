'use strict'

# ==============================
# TEMPLATE METHOD
# ==============================

build = (construction) ->
    """
    Construction of a new home:
     1. #{construction.foundations()}
     2. #{construction.walls()}
     3. #{construction.roof()}\n
    """ 

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

# ==============================
# TEST
# ==============================

console.log build house
console.log build building
