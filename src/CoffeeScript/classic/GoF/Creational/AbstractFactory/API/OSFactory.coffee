'use strict'

# ==============================
# ABSTRACT FACTORY OF OPERATING SYSTEMS 
# ==============================

class OSFactory
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is OSFactory

    getLinuxDistro: (id) ->
        throw new Error "You cannot call an abstract method!"

    getMacRelease: (id) ->
        throw new Error "You cannot call an abstract method!"
        
    getWindowsVersion: (id) ->
        throw new Error "You cannot call an abstract method!"

module.exports = OSFactory
