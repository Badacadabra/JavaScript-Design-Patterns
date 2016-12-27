import CustomPizza from './CustomPizza';

// ==============================
// PIZZA INGREDIENT
// ==============================

export default class Bacon extends CustomPizza {
    ingredients() {
        return this._pizza.ingredients() + "- Bacon\n";
    }
}
