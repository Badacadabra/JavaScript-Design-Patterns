import FinancialEntity from './FinancialEntity';

// ==============================
// CONCRETE ATM 
// ==============================

export default class ATM extends FinancialEntity {
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
