import Racer from './Racer';

// ==============================
// CONCRETE RACER
// ==============================

export default class Swimmer extends Racer {
    go() {
        return `Swimmer: go!\n${super.go()}`;
    }
}
