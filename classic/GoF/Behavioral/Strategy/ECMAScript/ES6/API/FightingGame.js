// ==============================
// CONCRETE CONTEXT 
// ==============================

export default class FightingGame {
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
