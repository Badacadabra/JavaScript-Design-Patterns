'use strict';

var Strategy = require('./Strategy');

// ==============================
// CONCRETE STRATEGY
// ==============================

var Defense = function () {};
Defense.prototype = Object.create(Strategy.prototype);
Defense.prototype.constructor = Defense;

Defense.prototype.fight = function () {
    return "Fight with a defensive style";
};

module.exports = Defense;
