import PaperSheet from './PaperSheet';

// ==============================
// CONCRETE PROTOTYPE
// ==============================

export default class Invoice extends PaperSheet {
    constructor(price, currency) {
        super();
        this.price = price;
        this.currency = currency;
    }

    photocopy() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}
