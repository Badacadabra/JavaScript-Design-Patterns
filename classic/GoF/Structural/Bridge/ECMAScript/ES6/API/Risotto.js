import Recipe from './Recipe';

// ==============================
// CONCRETE RECIPE
// ==============================

export default class Risotto extends Recipe {
    cook() {
        return `Risotto with ${this._sauce.ingredients()}`;
    }
}
