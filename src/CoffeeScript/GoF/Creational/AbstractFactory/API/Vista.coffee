'use strict'

WindowsVersion = require './WindowsVersion'

# ==============================
# CONCRETE WINDOWS VERSION
# ==============================

class Vista extends WindowsVersion
    constructor: ->
        super "Windows Vista"

module.exports = Vista
