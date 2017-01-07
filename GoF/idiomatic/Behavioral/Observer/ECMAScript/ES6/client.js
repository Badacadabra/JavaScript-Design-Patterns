import { lion, crocodile } from './API/observers';
import gazelle from './API/observable';

// ==============================
// CLIENT CODE 
// ==============================

gazelle.addPredator(lion);
gazelle.addPredator(crocodile);

console.log(gazelle.notifyPredators());
