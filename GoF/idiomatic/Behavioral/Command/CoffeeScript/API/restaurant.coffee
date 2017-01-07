'use strict'

# ==============================
# RESTAURANT
# ==============================

module.exports =
    orders: []
    addOrder: (order) ->
        @orders.push order
    prepareOrders: -> 
        summary = ""
        summary += order.deliver() for order in @orders
        summary
