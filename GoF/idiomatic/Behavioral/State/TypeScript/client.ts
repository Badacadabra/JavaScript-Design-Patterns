import { pc } from './API/context';

// ==============================
// CLIENT CODE 
// ==============================

pc.currentState = pc.states.off;

console.log(pc.currentState.name); // off
pc.power();
console.log(pc.currentState.name); // on
pc.power();
console.log(pc.currentState.name); // off
