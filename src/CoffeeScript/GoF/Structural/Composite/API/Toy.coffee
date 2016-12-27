'use strict'

# ==============================
# ABSTRACT COMPONENT
# ==============================

class Toy
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Toy

    description: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Toy
