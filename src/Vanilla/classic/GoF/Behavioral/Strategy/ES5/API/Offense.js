'use strict';

var Strategy = require('./Strategy');

// ==============================
// CONCRETE STRATEGY
// ==============================

var Offense = function () {};
Offense.prototype = Object.create(Strategy.prototype);
Offense.prototype.constructor = Offense;

Offense.prototype.fight = function () {
    return "Fight with an offensive style";
};

module.exports = Offense;
