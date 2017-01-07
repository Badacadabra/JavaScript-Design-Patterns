import Strategy from './Strategy';

// ==============================
// CONCRETE STRATEGY
// ==============================

export default class Defense implements Strategy {
    fight(): string {
        return "Fight with a defensive style";
    }
}
