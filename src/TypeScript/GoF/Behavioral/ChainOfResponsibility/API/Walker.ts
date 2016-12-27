import Racer from './Racer';

// ==============================
// CONCRETE RACER
// ==============================

export default class Walker extends Racer {
    public go(): string {
        return `Walker: go!\n${super.go()}`;
    }
}
