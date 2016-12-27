'use strict';

var Visitor = require('./Visitor');

// ==============================
// CONCRETE VISITOR 
// ==============================

var Tourist = function () {};
Tourist.prototype = Object.create(Visitor.prototype);
Tourist.prototype.constructor = Tourist;

Tourist.prototype.visit = function (monument) {
    return "Visiting " + monument.constructor.name;
};

module.exports = Tourist;
