'use strict';

// ==============================
// RESTAURANT
// ==============================

module.exports = {
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
