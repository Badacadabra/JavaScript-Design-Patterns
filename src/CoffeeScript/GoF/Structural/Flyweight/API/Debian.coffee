'use strict'

LinuxDistro = require './LinuxDistro'

# ==============================
# CONCRETE GNU/LINUX DISTRO
# ==============================

class Debian extends LinuxDistro
    constructor: ->
        super "Debian"

module.exports = Debian
