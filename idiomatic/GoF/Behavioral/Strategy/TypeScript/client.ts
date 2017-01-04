// ==============================
// CONTEXT 
// ==============================

interface Game {
    strategy: Strategy; 
    play(): string;
}

const fightingGame: Game = {
    strategy: null,
    play() {
        return this.strategy.fight(); 
    }
};

// ==============================
// STRATEGIES 
// ==============================

interface Strategy {
    fight(): string;
}

const offense: Strategy = {
    fight() {
        return "Fight with an offensive style";
    }
};

const defense: Strategy = {
    fight() {
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
