// ==============================
// CONCRETE CONTEXT 
// ==============================

class FightingGame {
    private strategy: Strategy;

    play(): string {
        return this.strategy.fight(); 
    }

    setStrategy(fightStyle: Strategy): void {
        this.strategy = fightStyle;
    }
}

// ==============================
// ABSTRACT STRATEGY 
// ==============================

interface Strategy {
    fight(): string;
}

// ==============================
// CONCRETE STRATEGIES 
// ==============================

class Offense implements Strategy {
    fight(): string {
        return "Fight with an offensive style";
    }
}

class Defense implements Strategy {
    fight(): string {
        return "Fight with a defensive style";
    }
}

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
