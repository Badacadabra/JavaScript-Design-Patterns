// ==============================
// PIZZA
// ==============================

export interface Pizza {
    ingredients(): string;
}

export const margherita: Pizza = {
    ingredients() {
        return "- Tomatoes\n- Mozzarella\n";
    }
};

// ==============================
// DECORATORS (INGREDIENTS)
// ==============================

export const addBacon: (pizza: Pizza) => Pizza = function (pizza: Pizza): Pizza {
    return {
        ingredients() {
            return `${pizza.ingredients()}- Bacon\n`;
        }
    }
};

export const addPeppers: (pizza: Pizza) => Pizza = function (pizza: Pizza): Pizza {
    return {
        ingredients() {
            return `${pizza.ingredients()}- Peppers\n`;
        }
    }
};
