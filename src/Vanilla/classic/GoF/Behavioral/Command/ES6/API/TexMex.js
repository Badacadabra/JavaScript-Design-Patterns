import Order from './Order';

// ==============================
// CONCRETE ORDER
// ==============================

export default class TexMex extends Order {
    constructor(customer) {
        super();
        this._customer = customer;
    }

    deliver() {
        return this._customer.pay();
    }
}
