'use strict'

# ==============================
# ABSTRACT MAC OS RELEASE 
# ==============================

class MacRelease
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is MacRelease
        @name = name

    bootMac: ->
        "#{@name} is booting..."

module.exports = MacRelease
