'use strict';

var HistoricalMonument = require('./HistoricalMonument');

// ==============================
// CONCRETE MONUMENT
// ==============================

var Castle = function () {};
Castle.prototype = Object.create(HistoricalMonument.prototype);
Castle.prototype.constructor = Castle;

Castle.prototype.accept = function (visitor) {
    return visitor.visit(this);
};

module.exports = Castle;
