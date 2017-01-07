import { pesto, carbonara } from './API/sauces';
import { pasta, risotto } from './API/recipes';

// ==============================
// TEST
// ==============================

console.log(pasta(pesto).cook());
console.log(risotto(carbonara).cook());
