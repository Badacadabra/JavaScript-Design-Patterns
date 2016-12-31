// ==============================
// SAUCES
// ==============================

interface Sauce {
    ingredients(): string;
}

const pesto: Sauce = {
    ingredients() {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
    }
};

const carbonara: Sauce = {
    ingredients() {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    }
};

// ==============================
// RECIPES
// ==============================

interface Recipe {
    cook(): string;
}

const pasta: (sauce: Sauce) => Recipe = function (sauce: Sauce): Recipe { 
    return {
        cook() {
            return `Pasta with ${sauce.ingredients()}`; 
        } 
    }
};

const risotto: (sauce: Sauce) => Recipe = function (sauce: Sauce): Recipe { 
    return {
        cook() {
            return `Risotto with ${sauce.ingredients()}`; 
        }
    }
};

// ==============================
// TEST
// ==============================

console.log(pasta(pesto).cook());
console.log(risotto(carbonara).cook());
