'use strict';

// ==============================
// ABSTRACT PROTOTYPE
// ==============================

var PaperSheet = function () {
    if (this.constructor === PaperSheet) {
        throw new Error("You cannot instantiate an abstract class!");
    }
};

PaperSheet.prototype.photocopy = function () { // clone method
    throw new Error("You cannot call an abstract method!");
};

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

// ==============================
// CLIENT CODE 
// ==============================

var invoice = new Invoice(42, "€"),
    copy = invoice.photocopy();

console.log(copy.price); // 42 
console.log(copy.currency); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
