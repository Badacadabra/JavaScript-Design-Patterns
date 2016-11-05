"use strict"

# ==============================
# ABSTRACT CONNECTIONS
# ==============================

class AnalogInterface
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is AnalogInterface

    handleAnalogSignal: ->
        throw new Error "You cannot call an abstract method!"

class DigitalInterface
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is DigitalInterface

    handleDigitalSignal: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE CONNECTIONS
# ==============================

# VGA has its own interface which handles images only through an analog signal
class VGA extends AnalogInterface
    handleAnalogSignal: ->
        "Interface: VGA\nData: images\nSignal: analog\n"

# But your computer uses HDMI as output and your projector uses VGA as input...
# Here you need an adapter if you want to display images. The two interfaces are incompatible.
class HDMIToVGAAdapter extends DigitalInterface
    constructor: ->
        @_vga = new VGA

    handleDigitalSignal: ->
        @_vga.handleAnalogSignal()

# ==============================
# CLIENT CODE
# ==============================

adapter = new HDMIToVGAAdapter

console.log adapter.handleDigitalSignal() # Your computer uses HDMI and your projetor uses VGA
