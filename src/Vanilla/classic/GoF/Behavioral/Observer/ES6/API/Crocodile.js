import Predator from './Predator';

// ==============================
// CONCRETE OBSERVER
// ==============================

export default class Crocodile extends Predator {
    attack() {
        return "Crocodile attack!\n";
    }
}
