'use strict';

var Debian = require('./Debian'),
    RedHat = require('./RedHat'),
    Slackware = require('./Slackware');

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

var LinuxDistrosFactory = function () {};

// The only way to declare real constants in ES5 (non writable and non configurable)
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
    },
    "activeDistros": { // Flyweights!
        value: Object.create(null), // new object without prototype, like a basic map
        enumerable: true
    }
});

// Static method to get an instance of the given type
LinuxDistrosFactory.getLinuxDistro = function (id) {
        // If the distro has never been instantiated, we will have to create a new object
        if (!this.activeDistros[id]) {
            switch (id) {
                case this.DEBIAN:
                    this.activeDistros[id] = new Debian();
                    break;
                case this.REDHAT:
                    this.activeDistros[id] = new RedHat();
                    break;
                case this.SLACKWARE:
                    this.activeDistros[id] = new Slackware();
                    break;
                default:
                    throw new Error("The Linux distribution you are looking for has not been found");
            }
        }
        // If the distro has already been instantiated, we return the initial instance
        return this.activeDistros[id];
};

module.exports = LinuxDistrosFactory;
