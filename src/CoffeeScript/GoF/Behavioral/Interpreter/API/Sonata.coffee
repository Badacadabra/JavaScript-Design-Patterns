'use strict'

# ==============================
# CONCRETE CONTEXT
# ==============================

class Sonata
    constructor: (@name, @composer) -> 

    getName: ->
        @_name

    getComposer: ->
        @_composer

module.exports = Sonata
