'use strict';

var Margherita = require('./API/Margherita'),
    Bacon = require('./API/Bacon'),
    Peppers = require('./API/Peppers');

// ==============================
// CLIENT CODE
// ==============================

console.log(new Peppers(new Bacon(new Margherita())).ingredients());
