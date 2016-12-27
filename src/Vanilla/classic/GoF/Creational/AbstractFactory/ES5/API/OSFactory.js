'use strict';

// ==============================
// ABSTRACT FACTORY OF OPERATING SYSTEMS 
// ==============================

var OSFactory = function () {
    if (this.constructor === OSFactory) {
        throw new Error("You cannot instantiate an abstract class!");
    }
};

OSFactory.prototype.getLinuxDistro = function (id) {
        throw new Error("You cannot call an abstract method!");
};

OSFactory.prototype.getMacRelease = function (id) {
        throw new Error("You cannot call an abstract method!");
};

OSFactory.prototype.getWindowsVersion = function (id) {
        throw new Error("You cannot call an abstract method!");
};

module.exports = OSFactory;
