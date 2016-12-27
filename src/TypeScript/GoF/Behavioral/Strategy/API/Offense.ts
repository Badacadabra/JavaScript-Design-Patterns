import Strategy from './Strategy';

// ==============================
// CONCRETE STRATEGY
// ==============================

export default class Offense implements Strategy {
    fight(): string {
        return "Fight with an offensive style";
    }
}
