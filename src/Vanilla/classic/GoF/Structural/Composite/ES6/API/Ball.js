import Toy from './Toy';

// ==============================
// SIMPLE (CONCRETE) COMPONENT
// ==============================

// A ball does not contain anything
export default class Ball extends Toy {
    description() {
        return "There's a ball!\n";
    }
}
