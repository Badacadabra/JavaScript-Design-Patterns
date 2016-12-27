'use strict';

var OSFactory = require('./OSFactory'),
    OS9 = require('./OS9'),
    OSX = require('./OSX');

// ==============================
// CONCRETE MAC OS FACTORY
// ==============================

var MacFactory = function () {};
MacFactory.prototype = Object.create(OSFactory.prototype);
MacFactory.prototype.constructor = MacFactory;

Object.defineProperties(MacFactory, {
    "OS9": {
        value: 0,
        enumerable: true
    },
    "OSX": {
        value: 1,
        enumerable: true
    }
});

MacFactory.prototype.getMacRelease = function (id) {
    switch (id) {
        case MacFactory.OS9:
            return new OS9();
        case MacFactory.OSX:
            return new OSX();
        default:
            throw new Error("The Mac release you are looking for has not been found.");
    }
};

module.exports = MacFactory;
