'use strict';

// ==============================
// STRATEGIES 
// ==============================

var offense = {
    fight: function () {
        return "Fight with an offensive style";
    }
};

var defense = {
    fight: function () {
        return "Fight with a defensive style";
    }
};

module.exports = {
    offense: offense,
    defense: defense
};
