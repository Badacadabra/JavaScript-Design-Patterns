'use strict'

Neighbor = require './Neighbor'

# ==============================
# CONCRETE COLLEAGUE (NEIGHBOR)
# ==============================

class Tom extends Neighbor
    constructor: (mediator) ->
        super mediator

    send: (message) ->
        @_mediator.send(message, @)

    receive: (message, sender) ->
        "[Tom] Message from #{sender}: '#{message}'\n"

module.exports = Tom
