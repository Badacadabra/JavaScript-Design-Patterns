import Pizza from './Pizza';

// ==============================
// CONCRETE PIZZA
// ==============================

export default class Margherita implements Pizza {
    public ingredients(): string {
        return "- Tomatoes\n- Mozzarella\n";
    }
}
