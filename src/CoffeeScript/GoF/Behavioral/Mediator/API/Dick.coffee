'use strict'

Neighbor = require './Neighbor'

# ==============================
# CONCRETE COLLEAGUES (NEIGHBORS)
# ==============================

class Dick extends Neighbor
    constructor: (mediator) ->
        super mediator

    send: (message) ->
        return @_mediator.send(message, @)

    receive: (message, sender) ->
        "[Dick] Message from #{sender}: '#{message}'\n"

module.exports = Dick
