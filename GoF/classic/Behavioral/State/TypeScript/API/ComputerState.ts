import Computer from './Computer';

// ==============================
// ABSTRACT STATE
// ==============================

export default interface ComputerState {
    power(pc: Computer): void;
}
