import Racer from './Racer';

// ==============================
// CONCRETE RACER
// ==============================

export default class Walker extends Racer {
    go() {
        return `Walker: go!\n${super.go()}`;
    }
}
