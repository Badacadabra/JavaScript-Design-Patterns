'use strict'

# ==============================
# ABSTRACT STRATEGY 
# ==============================

class Strategy
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Strategy

    fight: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Strategy
