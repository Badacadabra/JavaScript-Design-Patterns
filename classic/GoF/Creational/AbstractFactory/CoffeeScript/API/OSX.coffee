'use strict'

MacRelease = require './MacRelease'

# ==============================
# CONCRETE MAC OS RELEASE
# ==============================

class OSX extends MacRelease
    constructor: ->
        super "Mac OS X"

module.exports = OSX
