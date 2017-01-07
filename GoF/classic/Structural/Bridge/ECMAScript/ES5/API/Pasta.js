'use strict';

var Recipe = require('./Recipe');

// ==============================
// CONCRETE RECIPE
// ==============================

var Pasta = function (sauce) {
    Recipe.call(this, sauce);
}
Pasta.prototype = Object.create(Recipe.prototype);
Pasta.prototype.constructor = Pasta;

Pasta.prototype.cook = function () {
    return "Pasta with " + this._sauce.ingredients(); 
};

module.exports = Pasta;
