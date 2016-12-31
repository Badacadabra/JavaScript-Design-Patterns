'use strict';

var Racer = require('./Racer');

// ==============================
// CONCRETE RACER
// ==============================

var Swimmer = function () {};
Swimmer.prototype = Object.create(Racer.prototype);
Swimmer.prototype.constructor = Swimmer;

Swimmer.prototype.go = function () {
    return "Swimmer: go!\n" + Racer.prototype.go.call(this);
};

module.exports = Swimmer;
