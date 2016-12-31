'use strict'

LinuxDistro = require './LinuxDistro'

# ==============================
# CONCRETE GNU/LINUX DISTRO
# ==============================

class Slackware extends LinuxDistro
    constructor: ->
        super "Slackware"

module.exports = Slackware 
