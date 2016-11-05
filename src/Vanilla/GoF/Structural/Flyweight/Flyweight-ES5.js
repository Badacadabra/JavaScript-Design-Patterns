'use strict';

// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

var LinuxDistro = (function () {
    function LinuxDistro(name) {
        if (this.constructor === LinuxDistro) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this.name = name;
    }

    LinuxDistro.prototype.boot = function () {
        return this.name + " is booting...";
    };

    return LinuxDistro;
})();

// ==============================
// CONCRETE GNU/LINUX DISTROS
// ==============================

// Let's say that each instance of a Linux distro will have the name of its constructor...

var Debian = (function () {
    function Debian() {
        LinuxDistro.call(this, "Debian");
    }
    Debian.prototype = Object.create(LinuxDistro.prototype);
    Debian.prototype.constructor = Debian;

    return Debian;
})();

var RedHat = (function () {
    function RedHat() {
        LinuxDistro.call(this, "RedHat");
    }
    RedHat.prototype = Object.create(LinuxDistro.prototype);
    RedHat.prototype.constructor = RedHat;

    return RedHat;
})();

var Slackware = (function () {
    function Slackware() {
        LinuxDistro.call(this, "Slackware");
    }
    Slackware.prototype = Object.create(LinuxDistro.prototype);
    Slackware.prototype.constructor = Slackware;

    return Slackware;
})();

// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

var LinuxDistrosFactory = (function () {
    function LinuxDistrosFactory() {}

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

    return LinuxDistrosFactory;
})();

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
var debian = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN),
    debianAgain = LinuxDistrosFactory.getLinuxDistro(LinuxDistrosFactory.DEBIAN);

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same instance has been reused)
