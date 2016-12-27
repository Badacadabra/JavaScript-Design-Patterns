import Racer from './Racer';

// ==============================
// CONCRETE RACER
// ==============================

export default class Swimmer extends Racer {
    public go(): string {
        return `Swimmer: go!\n${super.go()}`;
    }
}
