import Strategy from './Strategy';

// ==============================
// CONCRETE STRATEGY
// ==============================

export default class Defense extends Strategy {
    fight() {
        return "Fight with a defensive style";
    }
}
