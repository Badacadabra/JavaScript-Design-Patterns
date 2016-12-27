import Geek from './API/Geek';
import Manufacturer from './API/Manufacturer';

// ==============================
// CLIENT CODE 
// ==============================

let geek = new Geek(),
    pc = Manufacturer.manufacture(geek);

console.log(pc);
