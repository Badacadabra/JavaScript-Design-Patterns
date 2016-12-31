// ==============================
// ABSTRACT VISITOR
// ==============================

export default class Visitor {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    visit(monument) {
        throw new Error("You cannot call an abstract method!");
    }
}
