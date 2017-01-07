'use strict';

var MacRelease = require('./MacRelease');

// ==============================
// CONCRETE MAC OS RELEASE
// ==============================

var OSX = function () {
    MacRelease.call(this, "Mac OS X");
};
OSX.prototype = Object.create(MacRelease.prototype);
OSX.prototype.constructor = OSX;

module.exports = OSX;
