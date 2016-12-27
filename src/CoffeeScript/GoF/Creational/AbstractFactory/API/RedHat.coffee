'use strict'

LinuxDistro = require './LinuxDistro'

# ==============================
# CONCRETE GNU/LINUX DISTRO
# ==============================

class RedHat extends LinuxDistro
    constructor: ->
        super "RedHat"

module.exports = RedHat
