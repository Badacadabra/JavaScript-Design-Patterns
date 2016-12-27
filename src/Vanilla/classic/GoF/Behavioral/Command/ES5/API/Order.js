'use strict';

// ==============================
// ABSTRACT ORDER
// ==============================

var Order = function() {
    if (this.constructor === Order) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

Order.prototype.deliver = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Order;
