'use strict';

var AnalogInterface = require('./AnalogInterface');

// ==============================
// CONCRETE CONNECTION
// ==============================

var VGA, name, data, signal;

// VGA has its own interface which handles images only through an analog signal
VGA = function () {};

name = "VGA",
data = "images",
signal = "analog";

VGA.prototype = Object.create(AnalogInterface.prototype);
VGA.prototype.constructor = VGA;

VGA.prototype.handleAnalogSignal = function () {
    return "Interface: " + name + "\nData: " + data + "\nSignal: " + signal;
};

module.exports = VGA;
