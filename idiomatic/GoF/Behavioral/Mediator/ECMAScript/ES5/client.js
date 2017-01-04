'use strict';

var neighbors = require('./API/colleagues'),
    harry = require('./API/mediator');

// ==============================
// CLIENT CODE 
// ==============================

var conversation = "";
conversation += neighbors.tom.send("Could you lower the volume of your music, please?", harry);
conversation += neighbors.dick.send("Are you serious? The volume is actually very low...", harry);

console.log(conversation);
