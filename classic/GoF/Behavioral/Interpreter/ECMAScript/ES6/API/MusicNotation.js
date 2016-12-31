// ==============================
// ABSTRACT EXPRESSION
// ==============================

export default class MusicNotation {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._name = name;
    }

    interpret(sonata) {
        throw new Error("You cannot call an abstract method!");
    }
}
