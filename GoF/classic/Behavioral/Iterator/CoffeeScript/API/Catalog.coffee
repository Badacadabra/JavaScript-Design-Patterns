'use strict'

# ==============================
# ABSTRACT ITERATOR 
# ==============================

class Catalog
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Catalog 

    hasNext: ->
        throw new Error "You cannot call an abstract method!"

    next: ->
        throw new Error "You cannot call an abstract method!"

module.exports = Catalog
