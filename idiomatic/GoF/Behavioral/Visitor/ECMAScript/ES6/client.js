import monument from './API/monuments';
import tourist from './API/visitor';

// ==============================
// CLIENT CODE 
// ==============================

let castle = monument('Castle'),
    abbey = monument('Abbey');

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
