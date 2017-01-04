'use strict';

// ==============================
// SAUCES
// ==============================

var pesto = {
    ingredients: function () {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
    }
};

var carbonara = {
    ingredients: function () {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    }
};

// ==============================
// RECIPES
// ==============================

var pasta = function (sauce) {
    return {
        cook: function () {
            return "Pasta with " + sauce.ingredients(); 
        } 
    }
};

var risotto = function (sauce) {
    return {
        cook: function () {
            return "Risotto with " + sauce.ingredients(); 
        }
    }
};

// ==============================
// CLIENT CODE
// ==============================

console.log(pasta(pesto).cook());
console.log(risotto(carbonara).cook());
