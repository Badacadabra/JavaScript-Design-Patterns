'use strict';

var LinuxDistro = require('./LinuxDistro');

// ==============================
// CONCRETE GNU/LINUX DISTRO
// ==============================

var Debian = function () {
    LinuxDistro.call(this, "Debian");
};
Debian.prototype = Object.create(LinuxDistro.prototype);
Debian.prototype.constructor = Debian;

module.exports = Debian;
