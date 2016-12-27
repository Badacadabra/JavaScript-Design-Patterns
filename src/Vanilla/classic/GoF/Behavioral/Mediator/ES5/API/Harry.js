'use strict';

var Mediator = require('./Mediator'),
    Tom = require('./Tom'),
    Dick = require('./Dick');

// ==============================
// CONCRETE MEDIATOR 
// ==============================

var Harry, tom, dick;

Harry = function () {};
Harry.prototype = Object.create(Mediator.prototype);
Harry.prototype.constructor = Harry;

tom = new Tom(this);
dick = new Dick(this);

Harry.prototype.send = function (message, neighbor) {
    if (neighbor instanceof Tom) {
        return dick.receive(message, "Tom");
    } else if (neighbor instanceof Dick) {
        return tom.receive(message, "Dick");
    } else {
        throw new Error("Unknown neighbor");
    }
};

module.exports = Harry;
