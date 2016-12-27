'use strict';

var LinuxDistro = require('./LinuxDistro');

// ==============================
// CONCRETE GNU/LINUX DISTRO
// ==============================

var Slackware = function () {
    LinuxDistro.call(this, "Slackware");
};
Slackware.prototype = Object.create(LinuxDistro.prototype);
Slackware.prototype.constructor = Slackware;

module.exports = Slackware;
