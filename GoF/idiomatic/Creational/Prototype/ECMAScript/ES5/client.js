'use strict';

var photocopy = require('./API/photocopy');

// ==============================
// CLIENT CODE 
// ==============================

var invoice = {
    price: 42,
    currency: "€"
};

var copy = photocopy(invoice);

console.log(copy.price); // 42 
console.log(copy.currency); // €
console.log(copy === invoice); // false (the copy is not the original invoice: it is a new object!)
