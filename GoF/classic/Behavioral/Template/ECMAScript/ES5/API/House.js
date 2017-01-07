'use strict';

var Home = require('./Home');

// ==============================
// CONCRETE HOME
// ==============================

var House = function () {};
House.prototype = Object.create(Home.prototype);
House.prototype.constructor = House;

House.prototype.foundations = function () {
    return "House foundations\n";
};

House.prototype.walls = function () {
    return "House walls\n";
};

House.prototype.roof = function () {
    return "House roof\n";
};

module.exports = House;
