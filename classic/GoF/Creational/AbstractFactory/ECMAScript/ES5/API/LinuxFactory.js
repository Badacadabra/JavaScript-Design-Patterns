'use strict';

var OSFactory = require('./OSFactory'),
    Debian = require('./Debian'),
    RedHat = require('./RedHat');

// ==============================
// CONCRETE GNU/LINUX FACTORY
// ==============================

var LinuxFactory = function () {};
LinuxFactory.prototype = Object.create(OSFactory.prototype);
LinuxFactory.prototype.constructor = LinuxFactory;

Object.defineProperties(LinuxFactory, {
    "DEBIAN": {
        value: 0,
        enumerable: true
    },
    "REDHAT": {
        value: 1,
        enumerable: true
    }
});

LinuxFactory.prototype.getLinuxDistro = function (id) {
    switch (id) {
        case LinuxFactory.DEBIAN:
            return new Debian();
        case LinuxFactory.REDHAT:
            return new RedHat();
        default:
            throw new Error("The Linux distribution you are looking for has not been found.");
    }
};

module.exports = LinuxFactory;
