import Geek from './API/Geek';
import Manufacturer from './API/Manufacturer';

// ==============================
// CLIENT CODE 
// ==============================

let geek: Geek = new Geek(),
    pc: string = Manufacturer.manufacture(geek);

console.log(pc);
