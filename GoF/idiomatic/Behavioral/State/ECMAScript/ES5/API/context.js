'use strict';

var power = require('./states');

// ==============================
// CONTEXT (PC)
// ==============================

module.exports = {
    currentState: null,
    states: {
        off: power.off,
        on: power.on
    },
    power: function () {
        this.currentState.power(this); 
    }
};
