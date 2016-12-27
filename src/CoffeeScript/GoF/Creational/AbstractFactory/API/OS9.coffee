'use strict'

MacRelease = require './MacRelease'

# ==============================
# CONCRETE MAC OS RELEASE
# ==============================

class OS9 extends MacRelease
    constructor: ->
        super "Mac OS 9"

module.exports = OS9
