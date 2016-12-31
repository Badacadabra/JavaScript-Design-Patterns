'use strict';

var HistoricalMonument = require('./HistoricalMonument');

// ==============================
// CONCRETE MONUMENT
// ==============================

var Abbey = function () {};
Abbey.prototype = Object.create(HistoricalMonument.prototype);
Abbey.prototype.constructor = Abbey;

Abbey.prototype.accept = function (visitor) {
    return visitor.visit(this);
};

module.exports = Abbey;
