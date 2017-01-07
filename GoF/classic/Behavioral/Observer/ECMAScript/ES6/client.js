import Lion from './API/Lion';
import Crocodile from './API/Crocodile';
import Gazelle from './API/Gazelle';

// ==============================
// CLIENT CODE
// ==============================

let lion = new Lion(),
    crocodile = new Crocodile(),
    gazelle = new Gazelle();

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
