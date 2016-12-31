'use strict'

# ==============================
# ABSTRACT EXPRESSION
# ==============================

class MusicNotation
    constructor: (name) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is MusicNotation
        @_name = name

    interpret: (sonata) ->
        throw new Error "You cannot call an abstract method!"

module.exports = MusicNotation
