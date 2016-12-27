import Invoice from './API/Invoice';

// ==============================
// CLIENT CODE 
// ==============================

let invoice: Invoice = new Invoice(42, "€"),
    copy: Invoice = invoice.photocopy();

console.log(copy.getPrice()); // 42 
console.log(copy.getCurrency()); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
