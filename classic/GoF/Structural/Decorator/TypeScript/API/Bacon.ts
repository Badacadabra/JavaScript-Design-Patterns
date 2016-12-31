import CustomPizza from './CustomPizza';

// ==============================
// PIZZA INGREDIENT
// ==============================

export default class Bacon extends CustomPizza {
    public ingredients(): string {
        return this.pizza.ingredients() + "- Bacon\n";
    }
}
