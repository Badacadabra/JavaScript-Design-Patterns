import CustomPizza from './CustomPizza';

// ==============================
// PIZZA INGREDIENT
// ==============================

export default class Peppers extends CustomPizza {
    public ingredients(): string {
        return this.pizza.ingredients() + "- Peppers\n";
    }
}
