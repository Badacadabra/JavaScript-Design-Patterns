// ==============================
// ABSTRACT HOME 
// ==============================

export default class Home {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    foundations() {
        throw new Error("You cannot call an abstract method!");
    }

    walls() {
        throw new Error("You cannot call an abstract method!");
    }

    roof() {
        throw new Error("You cannot call an abstract method!");
    }

    build() {
        return `
Construction of a new home:
 1. ${this.foundations()}
 2. ${this.walls()}
 3. ${this.roof()}`;
    }
}
