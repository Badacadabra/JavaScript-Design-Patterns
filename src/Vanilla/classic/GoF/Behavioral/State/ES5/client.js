'use strict';

var Computer = require('./API/Computer');

// ==============================
// CLIENT CODE
// ==============================

var pc = new Computer();

pc.setCurrentState(pc.getStates().off);

console.log(pc.getCurrentState().constructor.name); // Off
pc.power();
console.log(pc.getCurrentState().constructor.name); // On
pc.power();
console.log(pc.getCurrentState().constructor.name); // Off
