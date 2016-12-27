'use strict';

// ==============================
// CONCRETE RESTAURANT
// ==============================

var Restaurant, orders;

Restaurant = function () {};

orders = [];

Restaurant.prototype.addOrder = function (order) {
    orders.push(order);
};

Restaurant.prototype.prepareOrders = function () {
    var summary = "";
    for (var i = 0, len = orders.length; i < len; i++) {
        summary += orders[i].deliver();
    }
    return summary;
};

module.exports = Restaurant;
