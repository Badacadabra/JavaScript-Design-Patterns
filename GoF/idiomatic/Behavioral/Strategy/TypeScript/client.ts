import { fightingGame } from './API/context';
import { offense, defense } from './API/strategies';

// ==============================
// CLIENT CODE 
// ==============================

fightingGame.strategy = defense;
console.log("ROUND 1 - " + fightingGame.play());
fightingGame.strategy = offense;
console.log("ROUND 2 - " + fightingGame.play());
