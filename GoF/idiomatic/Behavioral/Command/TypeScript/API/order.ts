import { Customer } from './customer';

// ==============================
// ORDER
// ==============================

export interface Order {
    customer?: Customer;
    deliver(): string;
}

export const texMex: Order = {
    deliver() {
        return this.customer.pay(); 
    }
};
