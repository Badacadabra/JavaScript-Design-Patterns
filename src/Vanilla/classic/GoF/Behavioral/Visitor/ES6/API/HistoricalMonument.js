// ==============================
// ABSTRACT MONUMENT 
// ==============================

export default class HistoricalMonument {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    accept(visitor) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}
