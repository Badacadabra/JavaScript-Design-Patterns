'use strict';

// ==============================
// ORDER
// ==============================

var texMex = {
    deliver: function () {
        return this.customer.pay(); 
    }
};

// ==============================
// RESTAURANT
// ==============================

var restaurant = {
    orders: [],
    addOrder: function (order) {
        this.orders.push(order); 
    },
    prepareOrders: function () {
        var summary = "";
        for (var i = 0, len = this.orders.length; i < len; i++) {
            summary += this.orders[i].deliver();
        }
        return summary;
    }
};

// ==============================
// CUSTOMER
// ==============================

var customer = {
    pay: function () {
        return "Payment OK!\n";
    }
};

// ==============================
// TEST 
// ==============================

texMex.customer = customer;
restaurant.addOrder(texMex);

console.log(restaurant.prepareOrders());
