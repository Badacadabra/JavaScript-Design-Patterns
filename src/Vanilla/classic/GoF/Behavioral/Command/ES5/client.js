'use strict';

var Customer = require('./API/Customer'),
    TexMex = require('./API/TexMex'),
    Restaurant = require('./API/Restaurant');

// ==============================
// CLIENT CODE
// ==============================

var customer = new Customer(),
    order = new TexMex(customer),
    restaurant = new Restaurant();

restaurant.addOrder(order);
console.log(restaurant.prepareOrders());
