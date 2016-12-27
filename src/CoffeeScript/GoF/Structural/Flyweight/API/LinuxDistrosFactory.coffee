'use strict'

Debian = require './Debian'
RedHat = require './RedHat'
Slackware = require './Slackware'

# ==============================
# FACTORY OF GNU/LINUX DISTROS
# ==============================

class LinuxDistrosFactory
    @DEBIAN: 0
    @REDHAT: 1
    @SLACKWARE: 2

    # Flyweights!
    @activeDistros: Object.create(null) # new object without prototype, like a basic map

    @getLinuxDistro: (id) ->
        # If the distro has never been instantiated, we will have to create a new object
        unless @activeDistros[id]
            switch id
                when @DEBIAN then @activeDistros[id] = new Debian()
                when @REDHAT then @activeDistros[id] = new RedHat()
                when @SLACKWARE then @activeDistros[id] = new Slackware()
                else throw new Error "The Linux distribution you are looking for has not been found"

        # If the distro has already been instantiated, we return the initial instance
        @activeDistros[id];

module.exports = LinuxDistrosFactory
