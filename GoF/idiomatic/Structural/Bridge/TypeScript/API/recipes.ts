import { Sauce } from './sauces';

// ==============================
// RECIPES
// ==============================

export interface Recipe {
    cook(): string;
}

export const pasta: (sauce: Sauce) => Recipe = function (sauce: Sauce): Recipe { 
    return {
        cook() {
            return `Pasta with ${sauce.ingredients()}`; 
        } 
    }
};

export const risotto: (sauce: Sauce) => Recipe = function (sauce: Sauce): Recipe { 
    return {
        cook() {
            return `Risotto with ${sauce.ingredients()}`; 
        }
    }
};
