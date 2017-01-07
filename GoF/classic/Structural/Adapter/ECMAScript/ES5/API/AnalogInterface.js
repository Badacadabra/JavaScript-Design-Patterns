'use strict';

// ==============================
// ABSTRACT CONNECTION
// ==============================

var AnalogInterface = function () {
    if (this.constructor === AnalogInterface) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

AnalogInterface.prototype.handleDigitalSignal = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = AnalogInterface;
