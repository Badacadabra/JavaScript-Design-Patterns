'use strict'

# ==============================
# ABSTRACT CONNECTION
# ==============================

class AnalogInterface
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is AnalogInterface

    handleAnalogSignal: ->
        throw new Error "You cannot call an abstract method!"

module.exports = AnalogInterface
