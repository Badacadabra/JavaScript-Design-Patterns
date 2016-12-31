import Recipe from './Recipe';

// ==============================
// CONCRETE RECIPE
// ==============================

export default class Pasta extends Recipe {
    public cook(): string {
        return `Pasta with ${this.sauce.ingredients()}`;
    }
}
