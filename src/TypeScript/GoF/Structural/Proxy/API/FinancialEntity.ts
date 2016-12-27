// ==============================
// ABSTRACT FINANCIAL ENTITY
// ==============================

export default interface FinancialEntity {
    withdrawMoney(code: number): string;
}
