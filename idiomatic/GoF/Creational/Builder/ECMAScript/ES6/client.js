import manufacturer from './API/manufacturer';
import geek from './API/builder';

// ==============================
// CLIENT CODE 
// ==============================

let myPc = manufacturer.manufacture(geek);

console.log(myPc);
