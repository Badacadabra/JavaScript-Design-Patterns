'use strict';

// ==============================
// TEMPLATE METHOD
// ==============================

var build = function (construction) {
    var home = "";
    home += "Construction of a new home:\n";
    home += " 1. " + construction.foundations();
    home += " 2. " + construction.walls();
    home += " 3. " + construction.roof();
    return home;
};

// ==============================
// HOMES 
// ==============================

var house = {
    foundations: function () {
        return "House foundations\n";
    },
    walls: function () {
        return "House walls\n";
    },
    roof: function () {
        return "House roof\n";
    }
};

var building = {
    foundations: function () {
        return "Apartment building foundations\n";
    },
    walls: function () {
        return "Apartment building walls\n";
    },
    roof: function () {
        return "Apartment building roof\n";
    }
};

// ==============================
// TEST
// ==============================

console.log(build(house));
console.log(build(building));
