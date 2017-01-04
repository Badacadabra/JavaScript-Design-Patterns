// ==============================
// CUSTOMER
// ==============================

export interface Customer {
    pay(): string;
}

export const customer: Customer = {
    pay() {
        return "Payment OK!\n";
    }
};
