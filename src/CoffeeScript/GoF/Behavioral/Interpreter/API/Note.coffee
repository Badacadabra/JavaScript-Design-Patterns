'use strict'

MusicNotation = require './MusicNotation'

# ==============================
# CONCRETE (TERMINAL) EXPRESSION
# ==============================

class Note extends MusicNotation
    constructor: (name) ->
        super name

    interpret: (sonata) ->
        "#{sonata.composer} played #{@_name}\n"

module.exports = Note
