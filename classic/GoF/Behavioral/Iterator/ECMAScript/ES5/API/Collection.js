'use strict';

// ==============================
// ABSTRACT ITERABLE 
// ==============================

var Collection = function () {
    if (this.constructor === Collection) {
        throw new Error("You cannot instantiate an abstract class!");
    } 
}

Collection.prototype.list = function() {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Collection;
