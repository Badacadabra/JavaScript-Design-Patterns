'use strict'

# ==============================
# ABSTRACT COLLEAGUE 
# ==============================

class Neighbor
    constructor: (mediator) ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Neighbor
        @_mediator = mediator

    send: (message) ->
        throw new Error "You cannot instantiate an abstract class!"

    receive: (message, sender) ->
        throw new Error "You cannot instantiate an abstract class!"

module.exports = Neighbor
