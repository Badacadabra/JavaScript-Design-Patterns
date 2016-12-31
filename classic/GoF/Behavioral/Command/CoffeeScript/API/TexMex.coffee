'use strict'

Order = require './Order'

# ==============================
# CONCRETE ORDER
# ==============================

class TexMex extends Order
    constructor: (@customer) ->

    deliver: ->
        @customer.pay()

module.exports = TexMex
