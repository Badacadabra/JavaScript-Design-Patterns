'use strict';

// ==============================
// ABSTRACT COLLEAGUE 
// ==============================

var Neighbor = function(mediator) {
    if (this.constructor === Neighbor) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this._mediator = mediator;
}

Neighbor.prototype.send = function (message) {
    throw new Error("You cannot instantiate an abstract class!");
};

Neighbor.prototype.receive = function (message, sender) {
    throw new Error("You cannot instantiate an abstract class!");
};

module.exports = Neighbor;
