'use strict'

WindowsVersion = require './WindowsVersion'

# ==============================
# CONCRETE WINDOWS VERSION
# ==============================

class XP extends WindowsVersion
    constructor: ->
        super "Windows XP"

module.exports = XP
