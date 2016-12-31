// ==============================
// ABSTRACT ORDER
// ==============================

export default class Order {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    deliver() {
        throw new Error("You cannot call an abstract method!");
    }
}
