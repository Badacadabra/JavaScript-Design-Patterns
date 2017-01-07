'use strict';

// ==============================
// TEMPLATE METHOD
// ==============================

module.exports = function (construction) {
    var home = "";
    home += "Construction of a new home:\n";
    home += " 1. " + construction.foundations();
    home += " 2. " + construction.walls();
    home += " 3. " + construction.roof();
    return home;
};
