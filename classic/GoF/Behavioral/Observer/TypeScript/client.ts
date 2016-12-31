import Lion from './API/Lion';
import Crocodile from './API/Crocodile';
import Gazelle from './API/Gazelle';

// ==============================
// CLIENT CODE
// ==============================

let lion: Lion = new Lion(),
    crocodile: Crocodile = new Crocodile(),
    gazelle: Gazelle = new Gazelle();

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
