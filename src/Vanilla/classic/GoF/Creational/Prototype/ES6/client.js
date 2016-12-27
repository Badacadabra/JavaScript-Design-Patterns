import Invoice from './API/Invoice';

// ==============================
// CLIENT CODE 
// ==============================

let invoice = new Invoice(42, "€"),
    copy = invoice.photocopy();

console.log(copy.price); // 42 
console.log(copy.currency); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
