// ==============================
// CONCRETE CONTEXT 
// ==============================

class FightingGame {
    constructor() {
        this._strategy = null;
    }

    play() {
        return this._strategy.fight(); 
    }

    setStrategy(fightStyle) {
        this._strategy = fightStyle;
    }
}

// ==============================
// ABSTRACT STRATEGY 
// ==============================

class Strategy {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    fight() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE STRATEGIES 
// ==============================

class Offense extends Strategy {
    fight() {
        return "Fight with an offensive style";
    }
}

class Defense extends Strategy {
    fight() {
        return "Fight with a defensive style";
    }
}

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
