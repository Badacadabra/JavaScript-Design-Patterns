// ==============================
// PIZZA
// ==============================

interface Pizza {
    ingredients(): string;
}

const margherita: Pizza = {
    ingredients() {
        return "- Tomatoes\n- Mozzarella\n";
    }
};

// ==============================
// DECORATORS (INGREDIENTS)
// ==============================

const addBacon: (pizza: Pizza) => Pizza = function (pizza: Pizza): Pizza {
    return {
        ingredients() {
            return `${pizza.ingredients()}- Bacon\n`;
        }
    }
};

const addPeppers: (pizza: Pizza) => Pizza = function (pizza: Pizza): Pizza {
    return {
        ingredients() {
            return `${pizza.ingredients()}- Peppers\n`;
        }
    }
};

// ==============================
// TEST 
// ==============================

console.log(addPeppers(addBacon(margherita)).ingredients());
