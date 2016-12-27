import Racer from './Racer';

// ==============================
// CONCRETE RACER
// ==============================

export default class Runner extends Racer {
    go() {
        return `Runner: go!\n${super.go()}`;
    }
}
