'use strict'

texMex = require './API/order';
restaurant = require './API/restaurant';
customer = require './API/customer';

# ==============================
# CLIENT CODE 
# ==============================

texMex.customer = customer
restaurant.addOrder texMex

console.log restaurant.prepareOrders()
