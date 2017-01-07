'use strict';

var Toy = require('./Toy');

// ==============================
// SIMPLE (CONCRETE) COMPONENT
// ==============================

// A ball does not contain anything
var Ball = function () {};
Ball.prototype = Object.create(Toy.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.description = function () {
    return "There's a ball!\n";
};

module.exports = Ball;
