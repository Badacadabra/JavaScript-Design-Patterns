import FinancialEntity from './FinancialEntity';
import BankAccount from './BankAccount';

// ==============================
// CONCRETE ATM 
// ==============================

export default class ATM implements FinancialEntity {
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
