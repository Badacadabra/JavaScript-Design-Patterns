// ==============================
// PIZZA
// ==============================

const margherita = {
    ingredients() {
        return "- Tomatoes\n- Mozzarella\n";
    }
};

// ==============================
// DECORATORS (INGREDIENTS)
// ==============================

const addBacon = (pizza) => {
    return {
        ingredients() {
            return `${pizza.ingredients()}- Bacon\n`;
        }
    }
};

const addPeppers = (pizza) => {
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
