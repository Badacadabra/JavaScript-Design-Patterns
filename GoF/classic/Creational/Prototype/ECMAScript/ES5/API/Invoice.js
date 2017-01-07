'use strict';

var PaperSheet = require('./PaperSheet');

// ==============================
// CONCRETE PROTOTYPE
// ==============================

var Invoice = function (price, currency) {
    this.price = price;
    this.currency = currency;
};
Invoice.prototype = Object.create(PaperSheet.prototype);
Invoice.prototype.constructor = Invoice;

Invoice.prototype.photocopy = function () {
    // Here we suppose invoice properties are always enumerable, writable and configurable.
    // If not, we should use Object.defineProperty() along with Object.getOwnPropertyDescriptor().
    var clone = Object.create(Object.getPrototypeOf(this));
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            clone[prop] = this[prop];
        }
    }
    return clone;
};

module.exports = Invoice;
