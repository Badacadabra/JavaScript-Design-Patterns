// ==============================
// ABSTRACT PROTOTYPE
// ==============================

class PaperSheet {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    photocopy() { // clone method
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE PROTOTYPE
// ==============================

class Invoice extends PaperSheet {
    constructor(price, currency) {
        super();
        this.price = price;
        this.currency = currency;
    }

    photocopy() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

// ==============================
// CLIENT CODE 
// ==============================

let invoice = new Invoice(42, "€"),
    copy = invoice.photocopy();

console.log(copy.price); // 42 
console.log(copy.currency); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
