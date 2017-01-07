import Order from './Order';
import Customer from './Customer';

// ==============================
// CONCRETE ORDER
// ==============================

export default class TexMex implements Order {
    private customer: Customer;

    constructor(customer: Customer) {
        this.customer = customer;
    }

    public deliver(): string {
        return this.customer.pay();
    }
}
