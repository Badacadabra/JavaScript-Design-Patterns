'use strict';

// ==============================
// ABSTRACT OBSERVABLE 
// ==============================

var Prey = function () {
    if (this.constructor === Prey) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this._predators = [];
};

Prey.prototype.addPredator = function (predator) {
    this._predators.push(predator);
};

Prey.prototype.notifyPredators = function () {
    var situation = "";
    for (var i = 0, len = this._predators.length; i < len; i++) {
        situation += this._predators[i].attack(); 
    }
    return situation;
};

module.exports = Prey;
