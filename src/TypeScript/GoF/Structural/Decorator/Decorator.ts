// ==============================
// ABSTRACT PIZZA
// ==============================

interface Pizza {
    ingredients(): string;
}

// ==============================
// CONCRETE PIZZA
// ==============================

class Margherita implements Pizza {
    public ingredients(): string {
        return "- Tomatoes\n- Mozzarella\n";
    }
}

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

// ==============================
// PIZZA INGREDIENTS
// ==============================

class Bacon extends CustomPizza {
    public ingredients(): string {
        return this.pizza.ingredients() + "- Bacon\n";
    }
}

class Peppers extends CustomPizza {
    public ingredients(): string {
        return this.pizza.ingredients() + "- Peppers\n";
    }
}

// ==============================
// CLIENT CODE
// ==============================

console.log(new Peppers(new Bacon(new Margherita())).ingredients());
