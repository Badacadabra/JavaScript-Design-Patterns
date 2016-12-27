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
    @getLinuxDistro: (id) ->
        switch id
            when @DEBIAN then new Debian
            when @REDHAT then new RedHat
            when @SLACKWARE then new Slackware
            else throw new Error "The Linux distribution you are looking for has not been found"

module.exports = LinuxDistrosFactory
