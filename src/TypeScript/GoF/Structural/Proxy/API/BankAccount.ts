import FinancialEntity from './FinancialEntity';

// ==============================
// CONCRETE BANK ACCOUNT
// ==============================

export default class BankAccount implements FinancialEntity {
    public withdrawMoney(code: number): string {
        return "Enjoy the cash!";
    }
}
