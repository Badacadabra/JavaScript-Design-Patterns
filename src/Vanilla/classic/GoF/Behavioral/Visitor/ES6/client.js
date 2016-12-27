import Castle from './API/Castle';
import Abbey from './API/Abbey';
import Tourist from './API/Tourist';

// ==============================
// CLIENT CODE
// ==============================

let castle = new Castle(),
    abbey = new Abbey(),
    tourist = new Tourist();

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
