"use strict"

# ==============================
# PC (PRODUCT)
# ==============================

class PC
    constructor: ->
        @._motherboard = ""
        @._cpu = ""
        @._ram = ""
        @._ssd = ""
        @._nic = ""
        @._powerSupply = ""
        @._caseDesign = ""

    setMotherboard: (part) ->
        @._motherboard = part

    setCpu: (part) ->
        @._cpu = part

    setRam: (part) ->
        @._ram = part

    setSsd: (part) ->
        @._ssd = part

    setNic: (part) ->
        @._nic = part

    setPowerSupply: (part) ->
        @._powerSupply = part

    setCaseDesign: (part) ->
        @._caseDesign = part

    toString: (part) ->
        "Motherboard: #{@._motherboard}\n
         CPU: #{@._cpu}\n
         RAM: #{@._ram}\n
         SSD: #{@._ssd}\n
         NIC: #{@._nic}\n
         Power supply: #{@._powerSupply}\n
         Case design: #{@._caseDesign}"

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

# ==============================
# CONCRETE PC BUILDER
# ==============================

class Geek extends Workforce
    constructor: ->
        @._pc = new PC

    assemblePC: ->
        @._pc.toString() 

    setMotherboard: (motherboard) ->
        @._pc.setMotherboard motherboard

    setCpu: (cpu) ->
        @._pc.setCpu cpu

    setRam: (ram) ->
        @._pc.setRam ram

    setSsd: (ssd) ->
        @._pc.setSsd ssd

    setNic: (nic) ->
        @._pc.setNic nic

    setPowerSupply: (powerSupply) ->
        @._pc.setPowerSupply powerSupply

    setCaseDesign: (caseDesign) ->
        @._pc.setCaseDesign caseDesign
    
# ==============================
# MANUFACTURER (DIRECTOR)
# ==============================

class Manufacturer
    @manufacture = (builder) ->
        builder.setMotherboard "Asus Z170-A ATX LGA1151"
        builder.setCpu "Intel Core i7 6950X"
        builder.setRam "HyperX Fury 8 GB"
        builder.setSsd "SanDisk SSD PLUS 240 GB"
        builder.setNic "D-Link DGE-528T"
        builder.setPowerSupply "Corsair RM750x"
        builder.setCaseDesign "Cooler Master HAF X"
        builder.assemblePC()

# ==============================
# CLIENT CODE 
# ==============================

geek = new Geek
pc = Manufacturer.manufacture geek

console.log pc
