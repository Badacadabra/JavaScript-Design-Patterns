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

module.exports = {
    pesto: pesto,
    carbonara: carbonara
};
