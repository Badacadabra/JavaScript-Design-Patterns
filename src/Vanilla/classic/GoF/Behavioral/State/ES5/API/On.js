'use strict';

var ComputerState = require('./ComputerState');

// ==============================
// CONCRETE STATE
// ==============================

var On = function () {};
On.prototype = Object.create(ComputerState.prototype);
On.prototype.constructor = On;

On.prototype.power = function (pc) {
    pc.setCurrentState(pc.getStates().off);
};

module.exports = On;
