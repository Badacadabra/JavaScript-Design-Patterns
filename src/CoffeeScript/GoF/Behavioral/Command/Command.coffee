# ==============================
# ABSTRACT ORDER
# ==============================

class Order
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is Order

    deliver: ->
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE ORDER
# ==============================

class TexMex extends Order
    constructor: (@customer) ->

    deliver: ->
        @customer.pay()

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

# ==============================
# CONCRETE CUSTOMER
# ==============================

class Customer
    pay: ->
        "Payment OK!\n"

# ==============================
# CLIENT CODE
# ==============================

customer = new Customer
order = new TexMex customer
restaurant = new Restaurant

restaurant.addOrder order
console.log restaurant.prepareOrders()
