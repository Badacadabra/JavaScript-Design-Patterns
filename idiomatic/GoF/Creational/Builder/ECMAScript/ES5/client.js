'use strict';

var manufacturer = require('./API/manufacturer'),
    geek = require('./API/builder');

// ==============================
// CLIENT CODE 
// ==============================

var myPc = manufacturer.manufacture(geek);

console.log(myPc);
