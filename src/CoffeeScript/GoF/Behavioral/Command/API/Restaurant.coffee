'use strict'

# ==============================
# CONCRETE RESTAURANT
# ==============================

class Restaurant
    constructor: ->
        @_orders = []

    addOrder: (order) -> 
        @_orders.push order

    prepareOrders: ->
        summary = ""
        summary += order.deliver() for order in @_orders
        summary

module.exports = Restaurant
