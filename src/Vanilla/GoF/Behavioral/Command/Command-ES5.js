'use strict';

// ==============================
// ABSTRACT ORDER
// ==============================

var Order = (function() {
    function Order() {
        if (this.constructor === Order) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Order.prototype.deliver = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return Order;
})();

// ==============================
// CONCRETE ORDER
// ==============================

var TexMex = (function () {
    function TexMex(customer) {
        this.customer = customer;
    }
    TexMex.prototype = Object.create(Order.prototype);
    TexMex.prototype.constructor = TexMex;

    TexMex.prototype.deliver = function () {
        return this.customer.pay();
    };

    return TexMex;
})();

// ==============================
// CONCRETE RESTAURANT
// ==============================

var Restaurant = (function () {
    var orders = [];

    function Restaurant() {}

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

    return Restaurant;
})();

// ==============================
// CONCRETE CUSTOMER
// ==============================

var Customer = (function () {
    function Customer() {}

    Customer.prototype.pay = function () {
        return "Payment OK!\n";
    };

    return Customer;
})();

// ==============================
// CLIENT CODE
// ==============================

var customer = new Customer(),
    order = new TexMex(customer),
    restaurant = new Restaurant();

restaurant.addOrder(order);
console.log(restaurant.prepareOrders());
