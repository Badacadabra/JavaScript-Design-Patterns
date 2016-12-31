'use strict'

# ==============================
# ORDER
# ==============================

texMex =
    deliver: -> 
        @customer.pay()

# ==============================
# RESTAURANT
# ==============================

restaurant =
    orders: []
    addOrder: (order) ->
        @orders.push order
    prepareOrders: -> 
        summary = ""
        summary += order.deliver() for order in @orders
        summary

# ==============================
# CUSTOMER
# ==============================

customer =
    pay: ->
        "Payment OK!\n"

# ==============================
# TEST 
# ==============================

texMex.customer = customer
restaurant.addOrder texMex

console.log restaurant.prepareOrders()
