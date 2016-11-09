'use strict';

// ==============================
// ABSTRACTIONS
// ==============================

var Recipe = (function () {
    function Recipe(sauce) {
        if (this.constructor === Recipe) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
        this._sauce = sauce;
    }

    Recipe.prototype.cook = function() {
        throw new Error("You cannot call an abstract method!");
    };

    return Recipe;
})();

var Sauce = (function () {
    function Sauce() {
        if (this.constructor === Sauce) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    Sauce.prototype.ingredients = function() {
        throw new Error("You cannot call an abstract method!");
    };

    return Sauce;
})();

// ==============================
// CONCRETE RECIPES
// ==============================

var Pasta = (function () {
    function Pasta(sauce) {
        Recipe.call(this, sauce);
    }
    Pasta.prototype = Object.create(Recipe.prototype);
    Pasta.prototype.constructor = Pasta;

    Pasta.prototype.cook = function () {
        return "Pasta with " + this._sauce.ingredients(); 
    };

    return Pasta;
})(); 

var Risotto = (function () {
    function Risotto(sauce) {
        Recipe.call(this, sauce);
    }
    Risotto.prototype = Object.create(Recipe.prototype);
    Risotto.prototype.constructor = Risotto;

    Risotto.prototype.cook = function () {
        return "Risotto with " + this._sauce.ingredients(); 
    };

    return Risotto;
})(); 

// ==============================
// CONCRETE SAUCES
// ==============================

var Pesto = (function () {
    function Pesto() {}
    Pesto.prototype = Object.create(Sauce.prototype);
    Pesto.prototype.constructor = Pesto;

    Pesto.prototype.ingredients = function () {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
    };

    return Pesto;
})();

var Carbonara = (function () {
    function Carbonara() {}
    Carbonara.prototype = Object.create(Sauce.prototype);
    Carbonara.prototype.constructor = Carbonara;

    Carbonara.prototype.ingredients = function () {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    };

    return Carbonara;
})();

// ==============================
// CLIENT CODE
// ==============================

// Sauces
var pesto = new Pesto(),
    carbonara = new Carbonara();

// Recipes
var pasta = new Pasta(pesto),
    risotto = new Risotto(carbonara);

console.log(pasta.cook());
console.log(risotto.cook());
