'use strict';

var WindowsVersion = require('./WindowsVersion');

// ==============================
// CONCRETE WINDOWS VERSION
// ==============================

var XP = function () {
    WindowsVersion.call(this, "Windows XP");
};
XP.prototype = Object.create(WindowsVersion.prototype);
XP.prototype.constructor = XP;

module.exports = XP;
