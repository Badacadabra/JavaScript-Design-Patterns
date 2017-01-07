'use strict';

// ==============================
// ABSTRACT MONUMENT
// ==============================

var HistoricalMonument = function() {
    if (this.constructor === HistoricalMonument) {
        throw new Error("You cannot instantiate an abstract class!");
    }
};

HistoricalMonument.prototype.accept = function (visitor) {
    throw new Error("You cannot instantiate an abstract class!");
};

module.exports = HistoricalMonument;
