'use strict';

var Harry = require('./API/Harry'),
    Tom = require('./API/Tom'),
    Dick = require('./API/Dick');

// ==============================
// CLIENT CODE
// ==============================

var harry = new Harry(),
    tom = new Tom(harry),
    dick = new Dick(harry),
    conversation = "";

conversation += tom.send("Could you lower the volume of your music, please?");
conversation += dick.send("Are you serious? The volume is actually very low...");

console.log(conversation);
