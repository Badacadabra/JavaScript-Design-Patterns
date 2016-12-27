import Predator from './Predator';

// ==============================
// CONCRETE OBSERVER
// ==============================

export default class Lion implements Predator {
    public attack(): string {
        return "Lion attack!\n";
    }
}
