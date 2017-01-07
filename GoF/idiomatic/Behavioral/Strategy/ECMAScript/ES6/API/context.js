// ==============================
// CONTEXT (FIGHTING GAME)
// ==============================

export default {
    strategy: null,
    play() {
        return this.strategy.fight(); 
    }
};
