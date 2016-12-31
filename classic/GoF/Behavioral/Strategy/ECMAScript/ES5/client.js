var FightingGame = require('./API/FightingGame'),
    Offense = require('./API/Offense'),
    Defense = require('./API/Defense');

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
