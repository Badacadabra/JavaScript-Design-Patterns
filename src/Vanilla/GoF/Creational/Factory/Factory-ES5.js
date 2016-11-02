'use strict';

// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

var LinuxDistro = function (name) {
    if (this.constructor === LinuxDistro) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this.name = name;
};

LinuxDistro.prototype.boot = function () {
    return this.name + " is booting...";
};

// ==============================
// CONCRETE GNU/LINUX DISTROS
// ==============================

// Let's say that each instance of a Linux distro will have the name of its constructor...

var Debian = function () {
    LinuxDistro.call(this, "Debian");
};
Debian.prototype = Object.create(LinuxDistro.prototype);
Debian.prototype.constructor = Debian;

var RedHat = function () {
    LinuxDistro.call(this, "RedHat");
};
RedHat.prototype = Object.create(LinuxDistro.prototype);
RedHat.prototype.constructor = RedHat;

var Slackware = function () {
    LinuxDistro.call(this, "Slackware");
};
Slackware.prototype = Object.create(LinuxDistro.prototype);
Slackware.prototype.constructor = Slackware;

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
    }
});

// Static method to get an instance of the given type
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

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
var debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    redhat = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.REDHAT),
    slackware = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.SLACKWARE);

console.log(debian.boot()); // Debian is booting...
console.log(redhat.boot()); // RedHat is booting...
console.log(slackware.boot()); // Slackware is booting...
