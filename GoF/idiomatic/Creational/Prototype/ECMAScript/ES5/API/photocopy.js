'use strict';

// ==============================
// PROTOTYPE
// ==============================

module.exports = function (invoice) {
    // Here we suppose invoice properties are always enumerable, writable and configurable.
    // If not, we should use Object.defineProperty() along with Object.getOwnPropertyDescriptor().
    var clone = Object.create(Object.getPrototypeOf(invoice));
    for (var prop in invoice) {
        if (invoice.hasOwnProperty(prop)) {
            clone[prop] = invoice[prop];
        }
    }
    return clone;
};
