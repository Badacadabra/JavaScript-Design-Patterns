'use strict';

var LinuxDistro = require('./LinuxDistro');

// ==============================
// CONCRETE GNU/LINUX DISTRO
// ==============================

var RedHat = function () {
    LinuxDistro.call(this, "RedHat");
}
RedHat.prototype = Object.create(LinuxDistro.prototype);
RedHat.prototype.constructor = RedHat;

module.exports = RedHat;
