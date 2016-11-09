// ==============================
// ABSTRACTIONS
// ==============================

class Recipe {
    constructor(sauce) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._sauce = sauce;   
    }

    cook() {
        throw new Error("You cannot call an abstract class!");
    }
}

class Sauce {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot call an abstract method!");
        }
    }

    ingredients() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE RECIPES
// ==============================

class Pasta extends Recipe {
    cook() {
        return "Pasta with " + this._sauce.ingredients();
    }
}

class Risotto extends Recipe {
    cook() {
        return "Risotto with " + this._sauce.ingredients();
    }
}

// ==============================
// CONCRETE SAUCES
// ==============================

class Pesto extends Sauce {
    ingredients() {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)"; 
    }
}

class Carbonara extends Sauce {
    ingredients() {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    }
}

// ==============================
// CLIENT CODE
// ==============================

// Sauces
let pesto = new Pesto(),
    carbonara = new Carbonara();

// Recipes
let pasta = new Pasta(pesto),
    risotto = new Risotto(carbonara);

console.log(pasta.cook());
console.log(risotto.cook());
