import Recipe from './Recipe';

// ==============================
// CONCRETE RECIPE
// ==============================

export default class Risotto extends Recipe {
    public cook(): string {
        return `Risotto with ${this.sauce.ingredients()}`;
    }
}
