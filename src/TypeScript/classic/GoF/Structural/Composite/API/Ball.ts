import Toy from './Toy';

// ==============================
// SIMPLE (CONCRETE) COMPONENT
// ==============================

// A ball does not contain anything
export default class Ball implements Toy {
    public description(): string {
        return "There's a ball!\n";
    }
}
