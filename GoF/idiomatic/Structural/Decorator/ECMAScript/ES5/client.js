'use strict';

var pizza = require('./API/pizza');

// ==============================
// CLIENT CODE 
// ==============================

console.log(pizza.peppers(pizza.bacon(pizza.margherita)).ingredients());
