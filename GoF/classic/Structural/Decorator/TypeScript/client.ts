import Margherita from './API/Margherita';
import Bacon from './API/Bacon';
import Peppers from './API/Peppers';

// ==============================
// CLIENT CODE
// ==============================

console.log(new Peppers(new Bacon(new Margherita())).ingredients());
