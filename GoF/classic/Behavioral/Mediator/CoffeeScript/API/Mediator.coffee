'use strict'

# ==============================
# ABSTRACT MEDIATOR
# ==============================

class Mediator
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Mediator

    send: (message, neighbor) ->
        throw new Error "You cannot instantiate an abstract class!"

module.exports = Mediator
