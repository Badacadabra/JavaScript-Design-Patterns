'use strict'

# ==============================
# ABSTRACT PROTOTYPE
# ==============================

class PaperSheet
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is PaperSheet

    photocopy: ->
        throw new Error "You cannot call an abstract method!"

module.exports = PaperSheet
