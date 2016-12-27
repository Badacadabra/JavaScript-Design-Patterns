'use strict'

OSFactory = require './OSFactory'
OS9 = require './OS9'
OSX = require './OSX'

# ==============================
# CONCRETE MAC OS FACTORY
# ==============================

class MacFactory extends OSFactory
    @OS9: 0
    @OSX: 1

    getMacRelease: (id) ->
        switch id
            when MacFactory.OS9 then new OS9
            when MacFactory.OSX then new OSX
            else throw new Error "The Mac release you are looking for has not been found."

module.exports = MacFactory
