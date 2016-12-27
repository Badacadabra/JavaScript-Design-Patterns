'use strict';

// ==============================
// CONCRETE CUSTOMER
// ==============================

var Customer = function () {};

Customer.prototype.pay = function () {
    return "Payment OK!\n";
};

module.exports = Customer;
