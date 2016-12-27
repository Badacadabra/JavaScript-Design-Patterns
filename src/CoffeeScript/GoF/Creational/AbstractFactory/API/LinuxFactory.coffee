'use strict'

OSFactory = require './OSFactory'
Debian = require './Debian'
RedHat = require './RedHat'

# ==============================
# CONCRETE GNU/LINUX FACTORY
# ==============================

class LinuxFactory extends OSFactory
    @DEBIAN: 0
    @REDHAT: 1

    getLinuxDistro: (id) ->
        switch id
            when LinuxFactory.DEBIAN then new Debian
            when LinuxFactory.REDHAT then new RedHat
            else throw new Error "The Linux distribution you are looking for has not been found."

module.exports = LinuxFactory
