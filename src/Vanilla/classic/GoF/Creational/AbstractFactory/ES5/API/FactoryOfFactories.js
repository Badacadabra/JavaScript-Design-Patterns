'use strict';

var LinuxFactory = require('./LinuxFactory'),
    MacFactory = require('./MacFactory'),
    WindowsFactory = require('./WindowsFactory');

// ==============================
// FACTORY OF FACTORIES 
// ==============================

var FactoryOfFactories = function () {};

Object.defineProperties(FactoryOfFactories, {
    "LINUX": {
        value: 0,
        enumerable: true
    },
    "MAC": {
        value: 1,
        enumerable: true
    },
    "WINDOWS": {
        value: 2,
        enumerable: true
    }
});

FactoryOfFactories.getOSFactory = function (id) {
    switch (id) {
        case FactoryOfFactories.LINUX:
            return new LinuxFactory();
        case FactoryOfFactories.MAC:
            return new MacFactory();
        case FactoryOfFactories.WINDOWS:
            return new WindowsFactory();
        default:
            throw new Error("The factory you are looking for has not been found.");
    }
}

module.exports = FactoryOfFactories;
