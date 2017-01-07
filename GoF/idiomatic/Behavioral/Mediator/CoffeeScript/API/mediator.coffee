'use strict'

neighbors = require './colleagues'

# ==============================
# MEDIATOR (HARRY)
# ==============================

module.exports =
    tom: neighbors.tom 
    dick: neighbors.dick 
    send: (message, neighbor) ->
        if neighbor.name is "Tom"
            @dick.receive message, "Tom"
        else if neighbor.name is "Dick"
            @tom.receive message, "Dick"
        else
            throw
                type: "Not found",
                message: "The given person has not been found in the neighborhood."
