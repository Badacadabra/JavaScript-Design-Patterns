'use strict';

var HDMIToVGAAdapter = require('./API/HDMIToVGAAdapter');

// ==============================
// CLIENT CODE
// ==============================

var adapter = new HDMIToVGAAdapter();

console.log(adapter.handleDigitalSignal()); // Your computer uses HDMI and your projector uses VGA
