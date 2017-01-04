'use strict';

var monument = require('./API/monuments'),
    tourist = require('./API/visitor');

// ==============================
// CLIENT CODE 
// ==============================

var castle = monument('Castle'),
    abbey = monument('Abbey');

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
