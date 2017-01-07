import FightingGame from './API/FightingGame';
import Offense from './API/Offense';
import Defense from './API/Defense';

// ==============================
// CLIENT CODE
// ==============================

let game = new FightingGame(),
    offense = new Offense(),
    defense = new Defense();

game.setStrategy(defense);
console.log(`ROUND 1 - ${game.play()}`);
game.setStrategy(offense);
console.log(`ROUND 2 - ${game.play()}`);
