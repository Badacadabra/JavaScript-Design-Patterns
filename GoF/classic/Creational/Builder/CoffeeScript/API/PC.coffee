'use strict'

# ==============================
# PC (PRODUCT)
# ==============================

class PC
    constructor: ->
        @_motherboard = ""
        @_cpu = ""
        @_ram = ""
        @_ssd = ""
        @_nic = ""
        @_powerSupply = ""
        @_caseDesign = ""

    setMotherboard: (part) ->
        @_motherboard = part

    setCpu: (part) ->
        @_cpu = part

    setRam: (part) ->
        @_ram = part

    setSsd: (part) ->
        @_ssd = part

    setNic: (part) ->
        @_nic = part

    setPowerSupply: (part) ->
        @_powerSupply = part

    setCaseDesign: (part) ->
        @_caseDesign = part

    toString: (part) ->
        "Motherboard: #{@_motherboard}\n
         CPU: #{@_cpu}\n
         RAM: #{@_ram}\n
         SSD: #{@_ssd}\n
         NIC: #{@_nic}\n
         Power supply: #{@_powerSupply}\n
         Case design: #{@_caseDesign}"

module.exports = PC
