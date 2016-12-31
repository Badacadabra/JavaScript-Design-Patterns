'use strict';

// ==============================
// ABSTRACT CONNECTION
// ==============================

var DigitalInterface = function () {
    if (this.constructor === DigitalInterface) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

DigitalInterface.prototype.handleDigitalSignal = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = DigitalInterface;
