'use strict'

# ==============================
# ABSTRACT VISITOR
# ==============================

class Visitor
    constructor: -> 
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Visitor

    visit: (monument) ->
        throw new Error "You cannot call an abstract method!"

module.exports = Visitor
