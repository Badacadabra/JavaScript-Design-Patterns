// ==============================
// ABSTRACT FINANCIAL ENTITY
// ==============================

class FinancialEntity {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    } 

    withdrawMoney() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE BANK ACCOUNT
// ==============================

class BankAccount extends FinancialEntity {
    withdrawMoney() {
        return "Enjoy the cash!";
    }
}

// ==============================
// CONCRETE ATM 
// ==============================

class ATM extends FinancialEntity {
    constructor(bankAccount) {
        super();
        this._bankAccount = bankAccount;
    }

    withdrawMoney(code) {
        if (code !== 1337) {
            throw {
                type: "AuthenticationException",
                message: "Invalid code"
            };
        }
        return this._bankAccount.withdrawMoney();
    }
}

// ==============================
// CLIENT CODE
// ==============================

let bankAccount = new BankAccount(),
    proxy = new ATM(bankAccount);

try {
    console.log(proxy.withdrawMoney(1234)); // Wrong code
} catch (e) {
    console.log(`${e.type} - ${e.message}`); // AuthenticationException - Invalid code
} finally {
    console.log(proxy.withdrawMoney(1337)); // Enjoy the cash! 
}
