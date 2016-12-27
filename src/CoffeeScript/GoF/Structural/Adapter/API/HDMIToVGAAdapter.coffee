'use strict'

DigitalInterface = require './DigitalInterface'
VGA = require './VGA'

# ==============================
# CONCRETE CONNECTION
# ==============================

class HDMIToVGAAdapter extends DigitalInterface
    constructor: ->
        @_vga = new VGA

    handleDigitalSignal: ->
        @_vga.handleAnalogSignal()

module.exports = HDMIToVGAAdapter
