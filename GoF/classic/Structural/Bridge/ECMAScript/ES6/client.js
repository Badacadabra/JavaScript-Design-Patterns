import Pesto from './API/Pesto';
import Carbonara from './API/Carbonara';
import Pasta from './API/Pasta';
import Risotto from './API/Risotto';

// ==============================
// CLIENT CODE
// ==============================

// Sauces
let pesto = new Pesto(),
    carbonara = new Carbonara();

// Recipes
let pasta = new Pasta(pesto),
    risotto = new Risotto(carbonara);

console.log(pasta.cook());
console.log(risotto.cook());
