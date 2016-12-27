'use strict';

// ==============================
// ABSTRACT ITERATOR 
// ==============================

var Catalog = function () {
    if (this.constructor === Catalog) {
        throw new Error("You cannot instantiate an abstract class!");
    } 
}

Catalog.prototype.hasNext = function () {
    throw new Error("You cannot call an abstract method!");
};

Catalog.prototype.next = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Catalog;
