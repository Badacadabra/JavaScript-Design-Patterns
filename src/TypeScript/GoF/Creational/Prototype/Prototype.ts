// ==============================
// ABSTRACT PROTOTYPE
// ==============================

interface PaperSheet {
    photocopy(): PaperSheet; // clone method
}

// ==============================
// CONCRETE PROTOTYPE
// ==============================

class Invoice implements PaperSheet {
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

// ==============================
// CLIENT CODE 
// ==============================

let invoice: Invoice = new Invoice(42, "€"),
    copy: Invoice = invoice.photocopy();

console.log(copy.getPrice()); // 42 
console.log(copy.getCurrency()); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
