'use strict';

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

module.exports = {
    pasta: pasta,
    risotto: risotto
};
