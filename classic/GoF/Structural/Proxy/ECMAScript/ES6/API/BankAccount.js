import FinancialEntity from './FinancialEntity';

// ==============================
// CONCRETE BANK ACCOUNT
// ==============================

export default class BankAccount extends FinancialEntity {
    withdrawMoney() {
        return "Enjoy the cash!";
    }
}
