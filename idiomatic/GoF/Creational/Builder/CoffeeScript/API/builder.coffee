'use strict'

pc = require './pc'

# ==============================
# PC BUILDER
# ==============================

module.exports =
    pc: pc
    assemblePC: -> 
        @pc.toString()
    setMotherboard: (motherboard) ->
        @pc.motherboard = motherboard
    setCpu: (cpu) ->
        @pc.cpu = cpu
    setRam: (ram) -> 
        @pc.ram = ram
    setSsd: (ssd) ->
        @pc.ssd = ssd
    setNic: (nic) ->
        @pc.nic = nic
    setPowerSupply: (powerSupply) ->
        @pc.powerSupply = powerSupply
    setCaseDesign: (caseDesign) ->
        @pc.caseDesign = caseDesign
