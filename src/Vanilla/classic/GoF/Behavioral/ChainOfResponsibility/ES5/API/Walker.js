'use strict';

var Racer = require('./Racer');

// ==============================
// CONCRETE RACER
// ==============================

var Walker = function () {};
Walker.prototype = Object.create(Racer.prototype);
Walker.prototype.constructor = Walker;

Walker.prototype.go = function () {
    return "Walker: go!\n" + Racer.prototype.go.call(this);
};

module.exports = Walker;
