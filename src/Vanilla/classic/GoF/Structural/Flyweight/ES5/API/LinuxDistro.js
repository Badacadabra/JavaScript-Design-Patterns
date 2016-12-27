'use strict';

// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

var LinuxDistro = function (name) {
    if (this.constructor === LinuxDistro) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this.name = name;
}

LinuxDistro.prototype.boot = function () {
    return this.name + " is booting...";
};

module.exports = LinuxDistro;
