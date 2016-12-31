'use strict';

var Racer = require('./Racer');

// ==============================
// CONCRETE RACER
// ==============================

var Runner = function () {};
Runner.prototype = Object.create(Racer.prototype);
Runner.prototype.constructor = Runner;

Runner.prototype.go = function () {
    return "Runner: go!\n" + Racer.prototype.go.call(this);
};

module.exports = Runner;
