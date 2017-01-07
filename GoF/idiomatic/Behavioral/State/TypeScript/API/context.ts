import { ComputerState, off, on } from './states';

// ==============================
// CONTEXT (PC)
// ==============================

export interface Computer {
    currentState: ComputerState;
    states: {off: ComputerState, on: ComputerState};
    power(): void;
}

export const pc: Computer = {
    currentState: null,
    states: { off, on },
    power() {
        this.currentState.power(this); 
    }
};
