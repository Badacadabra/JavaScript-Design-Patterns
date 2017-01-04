import { margherita, addBacon, addPeppers } from './API/pizza';

// ==============================
// CLIENT CODE 
// ==============================

console.log(addPeppers(addBacon(margherita)).ingredients());
