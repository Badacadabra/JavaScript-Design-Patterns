// ==============================
// PIZZA
// ==============================

export const margherita = {
    ingredients() {
        return "- Tomatoes\n- Mozzarella\n";
    }
};

// ==============================
// DECORATORS (INGREDIENTS)
// ==============================

export const addBacon = (pizza) => {
    return {
        ingredients() {
            return `${pizza.ingredients()}- Bacon\n`;
        }
    }
};

export const addPeppers = (pizza) => {
    return {
        ingredients() {
            return `${pizza.ingredients()}- Peppers\n`;
        }
    }
};
