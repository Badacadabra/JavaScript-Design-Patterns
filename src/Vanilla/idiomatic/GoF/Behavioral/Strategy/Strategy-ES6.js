// ==============================
// CONTEXT 
// ==============================

const fightingGame = {
    strategy: null,
    play() {
        return this.strategy.fight(); 
    }
};

// ==============================
// STRATEGIES 
// ==============================

const offense = {
    fight() {
        return "Fight with an offensive style";
    }
};

const defense = {
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
