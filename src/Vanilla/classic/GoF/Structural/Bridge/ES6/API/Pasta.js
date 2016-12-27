import Recipe from './Recipe';

// ==============================
// CONCRETE RECIPE
// ==============================

export default class Pasta extends Recipe {
    cook() {
        return `Pasta with ${this._sauce.ingredients()}`;
    }
}
