# ==============================
# ABSTRACT HOME 
# ==============================

class Home
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Home

    foundations: ->
        throw new Error "You cannot call an abstract method!"

    walls: ->
        throw new Error "You cannot call an abstract method!"

    roof: ->
        throw new Error "You cannot call an abstract method!"

    build: ->
        """
        Construction of a new home:
         1. #{this.foundations()}
         2. #{this.walls()}
         3. #{this.roof()}\n
        """

# ==============================
# CONCRETE HOMES 
# ==============================

class House extends Home
    foundations: ->
        "House foundations"

    walls: ->
        "House walls"

    roof: ->
        "House roof"

class Building extends Home
    foundations: ->
        "Apartment building foundations"

    walls: ->
        "Apartment building walls"

    roof: ->
        "Apartment building roof"

# ==============================
# CLIENT CODE
# ==============================

house = new House
building = new Building

console.log house.build()
console.log building.build()
