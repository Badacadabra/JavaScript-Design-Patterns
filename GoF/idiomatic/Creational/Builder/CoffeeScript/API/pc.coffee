'use strict'

# ==============================
# PC (PRODUCT)
# ==============================

module.exports =
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
