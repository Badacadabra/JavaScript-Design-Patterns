import Pizza from './Pizza';

// ==============================
// PIZZA DECORATOR
// ==============================

abstract class CustomPizza implements Pizza {
    protected pizza: Pizza;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }

    public ingredients(): string {
        return this.pizza.ingredients();
    }
}

export default CustomPizza;
