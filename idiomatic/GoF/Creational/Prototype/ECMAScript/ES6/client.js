import photocopy from './API/photocopy';

// ==============================
// CLIENT CODE 
// ==============================

let invoice = {
    price: 42,
    currency: "€"
};

let copy = photocopy(invoice); 

console.log(copy.price); // 42 
console.log(copy.currency); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
