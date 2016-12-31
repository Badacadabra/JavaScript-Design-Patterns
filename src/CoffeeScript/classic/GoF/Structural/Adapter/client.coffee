'use strict'

HDMIToVGAAdapter = require './API/HDMIToVGAAdapter'

# ==============================
# CLIENT CODE
# ==============================

adapter = new HDMIToVGAAdapter

console.log adapter.handleDigitalSignal() # Your computer uses HDMI and your projetor uses VGA
