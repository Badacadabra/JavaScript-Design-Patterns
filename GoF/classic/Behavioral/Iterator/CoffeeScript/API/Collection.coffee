'use strict'

# ==============================
# ABSTRACT ITERABLE 
# ==============================

class Collection
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Collection

    list: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Collection
