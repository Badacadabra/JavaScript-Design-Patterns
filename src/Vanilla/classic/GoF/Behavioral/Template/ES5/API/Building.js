'use strict';

var Home = require('./Home');

// ==============================
// CONCRETE HOME
// ==============================

var Building = function () {};
Building.prototype = Object.create(Home.prototype);
Building.prototype.constructor = Building;

Building.prototype.foundations = function () {
    return "Apartment building foundations\n";
};

Building.prototype.walls = function () {
    return "Apartment building walls\n";
};

Building.prototype.roof = function () {
    return "Apartment building roof\n";
};

module.exports = Building;
