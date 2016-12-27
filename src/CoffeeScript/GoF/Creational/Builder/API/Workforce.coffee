'use strict'

# ==============================
# ABSTRACT PC BUILDER
# ==============================

class Workforce
    construct: ->
        throw new Error "You cannot instantiate an abstract class!"

    assemblePC: ->
        throw new Error "You cannot call an abstract method!"

    setMotherboard: (motherboard) ->
        throw new Error "You cannot call an abstract method!"

    setCpu: (cpu) ->
        throw new Error "You cannot call an abstract method!"

    setRam: (ram) ->
        throw new Error "You cannot call an abstract method!"

    setSsd: (ssd) ->
        throw new Error "You cannot call an abstract method!"

    setNic: (nic) ->
        throw new Error "You cannot call an abstract method!"

    setPowerSupply: (powerSupply) ->
        throw new Error "You cannot call an abstract method!"

    setCaseDesign: (caseDesign) ->
        throw new Error "You cannot call an abstract method!"

module.exports = Workforce

