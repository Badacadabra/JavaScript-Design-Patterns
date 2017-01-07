'use strict'

Workforce = require './Workforce'
PC = require './PC'

# ==============================
# CONCRETE PC BUILDER
# ==============================

class Geek extends Workforce
    constructor: ->
        @_pc = new PC

    assemblePC: ->
        @_pc.toString() 

    setMotherboard: (motherboard) ->
        @_pc.setMotherboard motherboard

    setCpu: (cpu) ->
        @_pc.setCpu cpu

    setRam: (ram) ->
        @_pc.setRam ram

    setSsd: (ssd) ->
        @_pc.setSsd ssd

    setNic: (nic) ->
        @_pc.setNic nic

    setPowerSupply: (powerSupply) ->
        @_pc.setPowerSupply powerSupply

    setCaseDesign: (caseDesign) ->
        @_pc.setCaseDesign caseDesign

module.exports = Geek
