import { manufacturer } from './API/manufacturer';
import { geek } from './API/builder';

// ==============================
// CLIENT CODE 
// ==============================

let myPc: string = manufacturer.manufacture(geek);

console.log(myPc);
