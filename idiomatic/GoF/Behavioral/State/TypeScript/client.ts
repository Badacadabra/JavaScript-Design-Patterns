// ==============================
// STATES 
// ==============================

interface ComputerState {
    name: string;
    power(pc: Computer): void;
}

const off: ComputerState = {
    name: "off",
    power(pc) {
        pc.currentState = pc.states.on;
    }
};

const on: ComputerState = {
    name: "on",
    power(pc) {
        pc.currentState = pc.states.off; 
    }
};

// ==============================
// CONTEXT
// ==============================

interface Computer {
    currentState: ComputerState;
    states: {off: ComputerState, on: ComputerState};
    power(): void;
}

const pc: Computer = {
    currentState: null,
    states: {
        off: off,
        on: on
    },
    power() {
        this.currentState.power(this); 
    }
};

// ==============================
// TEST 
// ==============================

pc.currentState = pc.states.off;

console.log(pc.currentState.name); // off
pc.power();
console.log(pc.currentState.name); // on
pc.power();
console.log(pc.currentState.name); // off
