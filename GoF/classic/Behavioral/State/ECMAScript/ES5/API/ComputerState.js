'use strict';

// ==============================
// ABSTRACT STATE
// ==============================

var ComputerState = function () {
    if (this.constructor === ComputerState) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

ComputerState.prototype.power = function (pc) {
    throw new Error("You cannot call an abstract method!");
};

module.exports = ComputerState;
