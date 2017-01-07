'use strict';

// ==============================
// OBSERVERS (PREDATORS)
// ==============================

var lion = {
    attack: function () {
        return "Lion attack!\n"; 
    }
};

var crocodile = {
    attack: function () {
        return "Crocodile attack!\n"; 
    }
};

module.exports = {
    lion: lion,
    crocodile: crocodile
};
