import Pizza from './Pizza';

// ==============================
// PIZZA DECORATOR
// ==============================

export default class CustomPizza extends Pizza {
    constructor(pizza) {
        super();
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._pizza = pizza;
    }

    ingredients() {
        return this._pizza.ingredients();
    }
}
