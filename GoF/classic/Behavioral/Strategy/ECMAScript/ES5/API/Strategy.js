'use strict';

// ==============================
// ABSTRACT STRATEGY 
// ==============================

var Strategy = function() {
    if (this.constructor === Strategy) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

Strategy.prototype.fight = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Strategy;
