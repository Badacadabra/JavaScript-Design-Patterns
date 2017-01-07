import { Computer } from './context';

// ==============================
// STATES 
// ==============================

export interface ComputerState {
    name: string;
    power(pc: Computer): void;
}

export const off: ComputerState = {
    name: "off",
    power(pc) {
        pc.currentState = pc.states.on;
    }
};

export const on: ComputerState = {
    name: "on",
    power(pc) {
        pc.currentState = pc.states.off; 
    }
};
