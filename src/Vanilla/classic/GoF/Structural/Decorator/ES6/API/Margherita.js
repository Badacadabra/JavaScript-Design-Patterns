import Pizza from './Pizza';

// ==============================
// CONCRETE PIZZA
// ==============================

export default class Margherita extends Pizza {
    ingredients() {
        return "- Tomatoes\n- Mozzarella\n";
    }
}
