// ==============================
// PROTOTYPE
// ==============================

interface PaperSheet {
    price: number;
    currency: string;
}

const photocopy: (invoice: PaperSheet) => PaperSheet = function (invoice: PaperSheet): PaperSheet {
    return Object.assign(Object.create(Object.getPrototypeOf(invoice)), invoice);
};

const invoice: PaperSheet = {
    price: 42,
    currency: "€"
};

// ==============================
// TEST 
// ==============================

let copy = photocopy(invoice); 

console.log(copy.price); // 42 
console.log(copy.currency); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
