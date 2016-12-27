'use strict';

// ==============================
// ABSTRACTION
// ==============================

var Recipe = function (sauce) {
    if (this.constructor === Recipe) {
        throw new Error("You cannot instantiate an abstract class!");
    } 
    this._sauce = sauce;
};

Recipe.prototype.cook = function() {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Recipe;
