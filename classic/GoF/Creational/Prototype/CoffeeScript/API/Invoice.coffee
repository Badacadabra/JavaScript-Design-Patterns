'use strict'

PaperSheet = require './PaperSheet'

# ==============================
# CONCRETE PROTOTYPE
# ==============================

class Invoice extends PaperSheet
    constructor: (@price, @currency) ->

    photocopy: ->
        clone = Object.create Object.getPrototypeOf @
        for own key, val of @
            clone[key] = val
        clone

module.exports = Invoice
