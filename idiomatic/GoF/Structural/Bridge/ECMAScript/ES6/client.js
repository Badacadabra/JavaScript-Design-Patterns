import { pesto, carbonara } from './API/sauces';
import { pasta, risotto } from './API/recipes';

// ==============================
// CLIENT CODE 
// ==============================

console.log(pasta(pesto).cook());
console.log(risotto(carbonara).cook());
