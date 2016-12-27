'use strict';

var Neighbor = require('./Neighbor');

// ==============================
// CONCRETE COLLEAGUE (NEIGHBOR)
// ==============================

var Dick = function (mediator) {
    Neighbor.call(this, mediator);
}
Dick.prototype = Object.create(Neighbor.prototype);
Dick.prototype.constructor = Dick;

Dick.prototype.send = function (message) {
    return this._mediator.send(message, this);
};

Dick.prototype.receive = function (message, sender) {
    return "[Dick] Message from " + sender + ": '" + message + "'\n";
};

module.exports = Dick;
