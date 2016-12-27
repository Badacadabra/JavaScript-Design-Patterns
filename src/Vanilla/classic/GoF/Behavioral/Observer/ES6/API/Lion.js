import Predator from './Predator';

// ==============================
// CONCRETE OBSERVER
// ==============================

export default class Lion extends Predator {
    attack() {
        return "Lion attack!\n";
    }
}
