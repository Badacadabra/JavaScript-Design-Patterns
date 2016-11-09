// ==============================
// ABSTRACT FINANCIAL ENTITY
// ==============================

interface FinancialEntity {
    withdrawMoney(code: number): string;
}

// ==============================
// CONCRETE BANK ACCOUNT
// ==============================

class BankAccount implements FinancialEntity {
    public withdrawMoney(code: number): string {
        return "Enjoy the cash!";
    }
}

// ==============================
// CONCRETE ATM 
// ==============================

class ATM implements FinancialEntity {
    private bankAccount: BankAccount;

    constructor(bankAccount: BankAccount) {
        this.bankAccount = bankAccount;
    }

    public withdrawMoney(code: number): string {
        if (code !== 1337) {
            throw {
                type: "AuthenticationException",
                message: "Invalid code"
            };
        }
        return this.bankAccount.withdrawMoney(code);
    }
}

// ==============================
// CLIENT CODE
// ==============================

let bankAccount: BankAccount = new BankAccount(),
    proxy: ATM = new ATM(bankAccount);

try {
    console.log(proxy.withdrawMoney(1234)); // Wrong code
} catch (e) {
    console.log(`${e.type} - ${e.message}`); // AuthenticationException - Invalid code
} finally {
    console.log(proxy.withdrawMoney(1337)); // Enjoy the cash! 
}
