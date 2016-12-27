'use strict';

var Debian = require('./Debian'),
    RedHat = require('./RedHat'),
    Slackware = require('./Slackware');

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

var LinuxDistrosFactory = function () {};

Object.defineProperties(LinuxDistrosFactory, {
    "DEBIAN": {
        value: 0,
        enumerable: true
    },
    "REDHAT": {
        value: 1,
        enumerable: true
    },
    "SLACKWARE": {
        value: 2,
        enumerable: true
    }
});

LinuxDistrosFactory.getLinuxDistro = function (id) {
    switch (id) {
        case LinuxDistrosFactory.DEBIAN:
            return new Debian();
        case LinuxDistrosFactory.REDHAT:
            return new RedHat();
        case LinuxDistrosFactory.SLACKWARE:
            return new Slackware();
        default:
            throw new Error("The Linux distribution you are looking for has not been found");
    }
};

module.exports = LinuxDistrosFactory;
