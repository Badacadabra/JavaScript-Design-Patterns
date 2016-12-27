'use strict';

var OSFactory = require('./OSFactory'),
    XP = require('./XP'),
    Vista = require('./Vista');

// ==============================
// CONCRETE WINDOWS FACTORY
// ==============================

var WindowsFactory = function () {};
WindowsFactory.prototype = Object.create(OSFactory.prototype);
WindowsFactory.prototype.constructor = WindowsFactory;

Object.defineProperties(WindowsFactory, {
    "XP": {
        value: 0,
        enumerable: true
    },
    "VISTA": {
        value: 1,
        enumerable: true
    }
});

WindowsFactory.prototype.getWindowsVersion = function (id) {
    switch (id) {
        case WindowsFactory.XP:
            return new XP();
        case WindowsFactory.VISTA:
            return new Vista();
        default:
            throw new Error("The Windows version you are looking for has not been found.");
    }
};

module.exports = WindowsFactory;
