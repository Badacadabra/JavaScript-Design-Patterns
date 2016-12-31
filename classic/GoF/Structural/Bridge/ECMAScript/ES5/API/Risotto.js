'use strict';

var Recipe = require('./Recipe');

// ==============================
// CONCRETE RECIPE
// ==============================

var Risotto = function (sauce) {
    Recipe.call(this, sauce);
}
Risotto.prototype = Object.create(Recipe.prototype);
Risotto.prototype.constructor = Risotto;

Risotto.prototype.cook = function () {
    return "Risotto with " + this._sauce.ingredients(); 
};

module.exports = Risotto;
