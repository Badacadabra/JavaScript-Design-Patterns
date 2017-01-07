'use strict'

AnalogInterface = require './AnalogInterface'

# ==============================
# CONCRETE CONNECTION
# ==============================

# VGA has its own interface which handles images only through an analog signal
class VGA extends AnalogInterface
    handleAnalogSignal: ->
        "Interface: VGA\nData: images\nSignal: analog\n"

module.exports = VGA
