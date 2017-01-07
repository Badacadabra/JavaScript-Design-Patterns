'use strict'

# ==============================
# ABSTRACT WINDOWS VERSION 
# ==============================

class WindowsVersion 
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is WindowsVersion
        @name = name

    bootWindows: ->
        "#{@name} is booting..."

module.exports = WindowsVersion
