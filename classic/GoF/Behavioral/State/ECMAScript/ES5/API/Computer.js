'use strict';

var Off = require('./Off'),
    On = require('./On');

// ==============================
// CONCRETE CONTEXT
// ==============================

var Computer, currentState, states;

Computer = function() {};

currentState = null,
states = {
    off: new Off(),
    on: new On()
};

Computer.prototype.power = function () {
    currentState.power(this); 
};

Computer.prototype.getCurrentState = function () {
    return currentState; 
};

Computer.prototype.setCurrentState = function (state) {
    currentState = state; 
};

Computer.prototype.getStates = function () {
    return states; 
};

module.exports = Computer;
