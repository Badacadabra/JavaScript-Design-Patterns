import Strategy from './Strategy';

// ==============================
// CONCRETE CONTEXT 
// ==============================

export default class FightingGame {
    private strategy: Strategy;

    play(): string {
        return this.strategy.fight(); 
    }

    setStrategy(fightStyle: Strategy): void {
        this.strategy = fightStyle;
    }
}
