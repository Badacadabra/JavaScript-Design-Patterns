// ==============================
// ABSTRACTIONS
// ==============================

abstract class Recipe {
    protected sauce: Sauce;

    constructor(sauce: Sauce) {
        this.sauce = sauce;   
    }

    public abstract cook(): string;
}

interface Sauce {
    ingredients(): string;
}

// ==============================
// CONCRETE RECIPES
// ==============================

class Pasta extends Recipe {
    public cook(): string {
        return "Pasta with " + this.sauce.ingredients();
    }
}

class Risotto extends Recipe {
    public cook(): string {
        return "Risotto with " + this.sauce.ingredients();
    }
}

// ==============================
// CONCRETE SAUCES
// ==============================

class Pesto implements Sauce {
    public ingredients(): string {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
    }
}

class Carbonara implements Sauce {
    public ingredients(): string {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    }
}

// ==============================
// CLIENT CODE
// ==============================

// Sauces
let pesto: Sauce = new Pesto(),
    carbonara: Sauce = new Carbonara();

// Recipes
let pasta: Recipe = new Pasta(pesto),
    risotto: Recipe = new Risotto(carbonara);

console.log(pasta.cook());
console.log(risotto.cook());
