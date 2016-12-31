'use strict'

LinuxFactory = require './LinuxFactory'
MacFactory = require './MacFactory'
WindowsFactory = require './WindowsFactory'

# ==============================
# FACTORY OF FACTORIES 
# ==============================

class FactoryOfFactories
    @LINUX: 0
    @MAC: 1
    @WINDOWS: 2

    @getOSFactory: (id) ->
        switch id
            when @LINUX then new LinuxFactory
            when @MAC then new MacFactory
            when @WINDOWS then new WindowsFactory
            else throw new Error "The factory you are looking for has not been found."

module.exports = FactoryOfFactories
