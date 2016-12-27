'use strict';

// ==============================
// ABSTRACT WINDOWS VERSION 
// ==============================

var WindowsVersion = function (name) {
    if (this.constructor === WindowsVersion) {
        throw new Error("You cannot instantiate an abstract class!");
    }
    this.name = name;
};

WindowsVersion.prototype.bootWindows = function () {
    return this.name + " is booting...";
};

module.exports = WindowsVersion;
