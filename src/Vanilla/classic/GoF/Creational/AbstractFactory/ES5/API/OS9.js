'use strict';

var MacRelease = require('./MacRelease');

// ==============================
// CONCRETE MAC OS RELEASE
// ==============================

var OS9 = function () {
    MacRelease.call(this, "Mac OS 9");
};
OS9.prototype = Object.create(MacRelease.prototype);
OS9.prototype.constructor = OS9;

module.export = OS9;
