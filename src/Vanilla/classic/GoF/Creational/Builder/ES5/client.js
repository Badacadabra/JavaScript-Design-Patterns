'use strict';

var Geek = require('./API/Geek'),
    Manufacturer = require('./API/Manufacturer');

// ==============================
// CLIENT CODE 
// ==============================

var geek = new Geek(),
    pc = Manufacturer.manufacture(geek);

console.log(pc);
