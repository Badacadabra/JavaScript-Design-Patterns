'use strict';

var WindowsVersion = require('./WindowsVersion');

// ==============================
// CONCRETE WINDOWS VERSION
// ==============================

var Vista = function () {
    WindowsVersion.call(this, "Windows Vista");
};
Vista.prototype = Object.create(WindowsVersion.prototype);
Vista.prototype.constructor = Vista;

module.exports = Vista;
