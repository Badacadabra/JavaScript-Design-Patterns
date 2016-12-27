import PaperSheet from './PaperSheet';

// ==============================
// CONCRETE PROTOTYPE
// ==============================

export default class Invoice implements PaperSheet {
    private price: number;
    private currency: string;

    constructor(price: number, currency: string) {
        this.price = price;
        this.currency = currency;
    }

    photocopy(): Invoice {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    public getPrice(): number {
        return this.price;
    }

    public getCurrency(): string {
        return this.currency;
    }
}
