// ==============================
// ABSTRACT PIZZA
// ==============================

class Pizza {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    ingredients() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE PIZZA
// ==============================

class Margherita extends Pizza {
    ingredients() {
        return "- Tomatoes\n- Mozzarella\n";
    }
}

// ==============================
// PIZZA DECORATOR
// ==============================

class CustomPizza extends Pizza {
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

// ==============================
// PIZZA INGREDIENTS
// ==============================

class Bacon extends CustomPizza {
    ingredients() {
        return this._pizza.ingredients() + "- Bacon\n";
    }
}

class Peppers extends CustomPizza {
    ingredients() {
        return this._pizza.ingredients() + "- Peppers\n";
    }
}

// ==============================
// CLIENT CODE
// ==============================

console.log(new Peppers(new Bacon(new Margherita())).ingredients());
