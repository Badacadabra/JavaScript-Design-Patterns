'use strict';

// ==============================
// ABSTRACT MEDIATOR
// ==============================

var Mediator = function() {
    if (this.constructor === Mediator) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

Mediator.prototype.send = function (message, neighbor) {
    throw new Error("You cannot instantiate an abstract class!");
};

module.exports = Mediator;
