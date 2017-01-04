// ==============================
// RECIPES
// ==============================

export const pasta = sauce => {
    return {
        cook() {
            return `Pasta with ${sauce.ingredients()}`; 
        } 
    }
};

export const risotto = sauce => {
    return {
        cook() {
            return `Risotto with ${sauce.ingredients()}`; 
        }
    }
};
