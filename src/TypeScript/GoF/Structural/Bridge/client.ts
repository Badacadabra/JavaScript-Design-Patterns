import Sauce from './API/Sauce';
import Pesto from './API/Pesto';
import Carbonara from './API/Carbonara';
import Recipe from './API/Recipe';
import Pasta from './API/Pasta';
import Risotto from './API/Risotto';

// ==============================
// CLIENT CODE
// ==============================

// Sauces
let pesto: Sauce = new Pesto(),
    carbonara: Sauce = new Carbonara();

// Recipes
let pasta: Recipe = new Pasta(pesto),
    risotto: Recipe = new Risotto(carbonara);

console.log(pasta.cook());
console.log(risotto.cook());
