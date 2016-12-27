'use strict'

# ==============================
# ABSTRACT MONUMENT 
# ==============================

class HistoricalMonument
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is HistoricalMonument

    accept: (visitor) ->
        throw new Error "You cannot instantiate an abstract class!"

module.exports = HistoricalMonument
