'use strict'

Mediator = require './Mediator'
Tom = require './Tom'
Dick = require './Dick'

# ==============================
# CONCRETE MEDIATOR 
# ==============================

class Harry extends Mediator
    constructor: ->
        @_tom = new Tom(@)
        @_dick = new Dick(@)

    send: (message, neighbor) ->
        if neighbor instanceof Tom
            @_dick.receive message, "Tom"
        else if neighbor instanceof Dick
            @_tom.receive message, "Dick"
        else
            throw new Error "Unknown neighbor"

module.exports = Harry
