'use strict';

// ==============================
// CONTEXT 
// ==============================

var fightingGame = {
    strategy: null,
    play: function () {
        return this.strategy.fight(); 
    }
};

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

// ==============================
// TEST 
// ==============================

fightingGame.strategy = defense;
console.log("ROUND 1 - " + fightingGame.play());
fightingGame.strategy = offense;
console.log("ROUND 2 - " + fightingGame.play());
