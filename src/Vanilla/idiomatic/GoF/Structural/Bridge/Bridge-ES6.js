// ==============================
// SAUCES
// ==============================

const pesto = {
    ingredients() {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
    }
};

const carbonara = {
    ingredients() {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    }
};

// ==============================
// RECIPES
// ==============================

const pasta = sauce => {
    return {
        cook() {
            return `Pasta with ${sauce.ingredients()}`; 
        } 
    }
};

const risotto = sauce => {
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
