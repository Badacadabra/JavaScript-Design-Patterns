// ==============================
// ABSTRACTION
// ==============================

export default class Recipe {
    constructor(sauce) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._sauce = sauce;   
    }

    cook() {
        throw new Error("You cannot call an abstract class!");
    }
}
