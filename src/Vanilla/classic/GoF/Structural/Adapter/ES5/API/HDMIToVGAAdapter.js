'use strict';

var DigitalInterface = require('./DigitalInterface'),
    VGA = require('./VGA');

// ==============================
// CONCRETE CONNECTION
// ==============================

var HDMIToVGAAdapter, vga;

HDMIToVGAAdapter = function () {};
HDMIToVGAAdapter.prototype = Object.create(DigitalInterface.prototype);
HDMIToVGAAdapter.prototype.constructor = HDMIToVGAAdapter;

vga = new VGA();

HDMIToVGAAdapter.prototype.handleDigitalSignal = function () {
    return vga.handleAnalogSignal();
};

module.exports = HDMIToVGAAdapter;
