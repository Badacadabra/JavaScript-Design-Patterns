'use strict'

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

module.exports = Home
