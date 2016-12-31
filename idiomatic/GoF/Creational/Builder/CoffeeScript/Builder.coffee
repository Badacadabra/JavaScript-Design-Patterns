'use strict'

# ==============================
# PC (PRODUCT)
# ==============================

pc =
    toString: -> 
        """
        Motherboard: #{@motherboard}
        CPU: #{@cpu}
        RAM: #{@ram}
        SSD: #{@ssd}
        NIC: #{@nic}
        Power supply: #{@powerSupply}
        Case design: #{@caseDesign}
        """

# ==============================
# PC BUILDER
# ==============================

geek =
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

# ==============================
# MANUFACTURER (DIRECTOR)
# ==============================

manufacturer =
    manufacture: (builder) ->
        builder.setMotherboard "Asus Z170-A ATX LGA1151"
        builder.setCpu "Intel Core i7 6950X"
        builder.setRam "HyperX Fury 8 GB"
        builder.setSsd "SanDisk SSD PLUS 240 GB"
        builder.setNic "D-Link DGE-528T"
        builder.setPowerSupply "Corsair RM750x"
        builder.setCaseDesign "Cooler Master HAF X"
        builder.assemblePC()

# ==============================
# TEST 
# ==============================

myPc = manufacturer.manufacture geek

console.log myPc
