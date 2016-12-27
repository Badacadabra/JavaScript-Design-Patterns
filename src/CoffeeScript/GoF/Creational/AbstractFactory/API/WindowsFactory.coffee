'use strict'

OSFactory = require './OSFactory'
XP = require './XP'
Vista = require './Vista'

# ==============================
# CONCRETE WINDOWS FACTORY
# ==============================

class WindowsFactory extends OSFactory
    @XP: 0
    @VISTA: 1

    getWindowsVersion: (id) ->
        switch id
            when WindowsFactory.XP then new XP
            when WindowsFactory.VISTA then new Vista
            else throw new Error "The Windows version you are looking for has not been found."

module.exports = WindowsFactory
