'use strict';

var Pesto = require('./API/Pesto'),
    Carbonara = require('./API/Carbonara'),
    Pasta = require('./API/Pasta'),
    Risotto = require('./API/Risotto');

// ==============================
// CLIENT CODE
// ==============================

// Sauces
var pesto = new Pesto(),
    carbonara = new Carbonara();

// Recipes
var pasta = new Pasta(pesto),
    risotto = new Risotto(carbonara);

console.log(pasta.cook());
console.log(risotto.cook());
