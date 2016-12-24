'use strict';

// ==============================
// CONCRETE CONTEXT 
// ==============================

var FightingGame = (function () {
    var strategy = null;

    function FightingGame() {}

    FightingGame.prototype.play = function () {
        return strategy.fight(); 
    };

    FightingGame.prototype.setStrategy = function (fightStyle) {
        strategy = fightStyle; 
    };

    return FightingGame;
})();

// ==============================
// ABSTRACT STRATEGY 
// ==============================

var Strategy = (function() {
    function Strategy() {
        if (this.constructor === Strategy) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Strategy.prototype.fight = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return Strategy;
})();

// ==============================
// CONCRETE STRATEGIES 
// ==============================

var Offense = (function () {
    function Offense() {}
    Offense.prototype = Object.create(Strategy.prototype);
    Offense.prototype.constructor = Offense;

    Offense.prototype.fight = function () {
        return "Fight with an offensive style";
    };

    return Offense;
})();

var Defense = (function () {
    function Defense() {}
    Defense.prototype = Object.create(Strategy.prototype);
    Defense.prototype.constructor = Defense;

    Defense.prototype.fight = function () {
        return "Fight with a defensive style";
    };

    return Defense;
})();

// ==============================
// CLIENT CODE
// ==============================

var game = new FightingGame(),
    offense = new Offense(),
    defense = new Defense();

game.setStrategy(defense);
console.log("ROUND 1 - " + game.play());
game.setStrategy(offense);
console.log("ROUND 2 - " + game.play());
