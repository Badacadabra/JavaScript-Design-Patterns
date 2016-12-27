'use strict';

var Neighbor = require('./Neighbor');

// ==============================
// CONCRETE COLLEAGUE (NEIGHBOR)
// ==============================

var Tom = function (mediator) {
    Neighbor.call(this, mediator);
}
Tom.prototype = Object.create(Neighbor.prototype);
Tom.prototype.constructor = Tom;

Tom.prototype.send = function (message) {
    return this._mediator.send(message, this);
};

Tom.prototype.receive = function (message, sender) {
    return "[Tom] Message from " + sender + ": '" + message + "'\n";
};

module.exports = Tom;
