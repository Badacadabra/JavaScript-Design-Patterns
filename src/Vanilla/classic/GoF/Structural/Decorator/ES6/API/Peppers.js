import CustomPizza from './CustomPizza';

// ==============================
// PIZZA INGREDIENT
// ==============================

export default class Peppers extends CustomPizza {
    ingredients() {
        return this._pizza.ingredients() + "- Peppers\n";
    }
}
