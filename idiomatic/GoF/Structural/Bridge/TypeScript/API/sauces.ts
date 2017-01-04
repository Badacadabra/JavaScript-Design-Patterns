// ==============================
// SAUCES
// ==============================

export interface Sauce {
    ingredients(): string;
}

export const pesto: Sauce = {
    ingredients() {
        return "Pesto (basil, garlic, oil, grated cheese, pine nuts)";
    }
};

export const carbonara: Sauce = {
    ingredients() {
        return "Carbonara (eggs, bacon, black pepper, grated cheese)";
    }
};
