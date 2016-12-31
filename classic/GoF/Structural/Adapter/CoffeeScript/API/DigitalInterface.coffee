'use strict'

# ==============================
# ABSTRACT CONNECTION
# ==============================

class DigitalInterface
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is DigitalInterface

    handleDigitalSignal: ->
        throw new Error "You cannot call an abstract method!"

module.exports = DigitalInterface
