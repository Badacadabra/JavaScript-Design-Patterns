import Predator from './Predator';

// ==============================
// CONCRETE OBSERVER
// ==============================

export default class Crocodile implements Predator {
    public attack(): string {
        return "Crocodile attack!\n";
    }
}
