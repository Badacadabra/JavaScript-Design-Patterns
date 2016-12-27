'use strict';

// ==============================
// ABSTRACT MAC OS RELEASE 
// ==============================

var MacRelease = function (name) {
    if (this.constructor === MacRelease) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this.name = name;
};

MacRelease.prototype.bootMac = function () {
    return this.name + " is booting...";
};

module.exports = MacRelease;
