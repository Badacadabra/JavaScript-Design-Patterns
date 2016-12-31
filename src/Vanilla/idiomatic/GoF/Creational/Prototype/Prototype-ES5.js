'use strict';

// ==============================
// PROTOTYPE
// ==============================

var photocopy = function (invoice) {
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

var invoice = {
    price: 42,
    currency: "€"
};

// ==============================
// TEST 
// ==============================

var copy = photocopy(invoice);

console.log(copy.price); // 42 
console.log(copy.currency); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
