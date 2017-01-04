'use strict';

// ==============================
// STATES 
// ==============================

var off = {
    name: "off",
    power: function (pc) {
        pc.currentState = pc.states.on;
    }
};

var on = {
    name: "on",
    power: function (pc) {
        pc.currentState = pc.states.off; 
    }
};

module.exports = {
    off: off,
    on: on
};
