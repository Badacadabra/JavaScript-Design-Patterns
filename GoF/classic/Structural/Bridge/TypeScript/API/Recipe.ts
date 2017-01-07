import Sauce from './Sauce';

// ==============================
// ABSTRACTIONS
// ==============================

abstract class Recipe {
    protected sauce: Sauce;

    constructor(sauce: Sauce) {
        this.sauce = sauce;   
    }

    public abstract cook(): string;
}

export default Recipe;
