'use strict';

// ==============================
// CONCRETE CONTEXT 
// ==============================

var FightingGame, strategy;

FightingGame = function () {};

strategy = null;

FightingGame.prototype.play = function () {
    return strategy.fight(); 
};

FightingGame.prototype.setStrategy = function (fightStyle) {
    strategy = fightStyle; 
};

module.exports = FightingGame;
