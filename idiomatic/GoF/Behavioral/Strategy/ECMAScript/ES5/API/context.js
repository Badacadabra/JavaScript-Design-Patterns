'use strict';

// ==============================
// CONTEXT (FIGHTING GAME)
// ==============================

module.exports = {
    strategy: null,
    play: function () {
        return this.strategy.fight(); 
    }
};
