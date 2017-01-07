// ==============================
// ABSTRACT FINANCIAL ENTITY
// ==============================

export default class FinancialEntity {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    } 

    withdrawMoney() {
        throw new Error("You cannot call an abstract method!");
    }
}
