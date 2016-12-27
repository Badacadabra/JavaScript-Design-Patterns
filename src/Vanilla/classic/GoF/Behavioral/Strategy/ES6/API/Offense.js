import Strategy from './Strategy';

// ==============================
// CONCRETE STRATEGY
// ==============================

export default class Offense extends Strategy {
    fight() {
        return "Fight with an offensive style";
    }
}
