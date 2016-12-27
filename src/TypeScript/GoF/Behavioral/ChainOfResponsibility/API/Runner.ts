import Racer from './Racer';

// ==============================
// CONCRETE RACER
// ==============================

export default class Runner extends Racer {
    public go(): string {
        return `Runner: go!\n${super.go()}`;
    }
}
