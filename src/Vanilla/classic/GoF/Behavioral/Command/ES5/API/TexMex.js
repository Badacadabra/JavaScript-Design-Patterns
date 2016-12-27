'use strict';

var Order = require('./Order');

// ==============================
// CONCRETE ORDER
// ==============================

var TexMex = function (customer) {
    this.customer = customer;
}
TexMex.prototype = Object.create(Order.prototype);
TexMex.prototype.constructor = TexMex;

TexMex.prototype.deliver = function () {
    return this.customer.pay();
};

module.exports = TexMex;
