import { off, on } from './states';

// ==============================
// CONTEXT (PC)
// ==============================

export default {
    currentState: null,
    states: { off, on },
    power() {
        this.currentState.power(this); 
    }
};
