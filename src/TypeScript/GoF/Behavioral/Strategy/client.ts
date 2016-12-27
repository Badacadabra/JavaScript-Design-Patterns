import FightingGame from './API/FightingGame';
import Strategy from './API/Strategy';
import Offense from './API/Offense';
import Defense from './API/Defense';

// ==============================
// CLIENT CODE
// ==============================

let game: FightingGame = new FightingGame(),
    offense: Strategy = new Offense(),
    defense: Strategy = new Defense();

game.setStrategy(defense);
console.log(`ROUND 1 - ${game.play()}`);
game.setStrategy(offense);
console.log(`ROUND 2 - ${game.play()}`);
