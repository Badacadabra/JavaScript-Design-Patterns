import Computer from './API/Computer';

// ==============================
// CLIENT CODE
// ==============================

let pc: Computer = new Computer();

pc.setCurrentState(pc.getStates().off);

// We extend this TypeScript interface to be able to get class names...
interface Function {
    name: string;
}

console.log(pc.getCurrentState().constructor.name); // Off
pc.power();
console.log(pc.getCurrentState().constructor.name); // On
pc.power();
console.log(pc.getCurrentState().constructor.name); // Off
