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

// ==============================
// CONTEXT
// ==============================

var pc = {
    currentState: null,
    states: {
        off: off,
        on: on
    },
    power: function () {
        this.currentState.power(this); 
    }
};

// ==============================
// TEST 
// ==============================

pc.currentState = pc.states.off;

console.log(pc.currentState.name); // off
pc.power();
console.log(pc.currentState.name); // on
pc.power();
console.log(pc.currentState.name); // off
