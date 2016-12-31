// ==============================
// STATES 
// ==============================

const off = {
    name: "off",
    power(pc) {
        pc.currentState = pc.states.on;
    }
};

const on = {
    name: "on",
    power(pc) {
        pc.currentState = pc.states.off; 
    }
};

// ==============================
// CONTEXT
// ==============================

const pc = {
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
