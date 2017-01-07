'use strict';

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

module.exports = {
    house: house,
    building: building
};
