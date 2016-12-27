'use strict';

var ComputerState = require('./ComputerState');

// ==============================
// CONCRETE STATE
// ==============================

var Off = function () {};
Off.prototype = Object.create(ComputerState.prototype);
Off.prototype.constructor = Off;

Off.prototype.power = function (pc) {
    pc.setCurrentState(pc.getStates().on);
};

module.exports = Off;
