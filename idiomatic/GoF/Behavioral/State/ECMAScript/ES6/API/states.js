// ==============================
// STATES 
// ==============================

export const off = {
    name: "off",
    power(pc) {
        pc.currentState = pc.states.on;
    }
};

export const on = {
    name: "on",
    power(pc) {
        pc.currentState = pc.states.off; 
    }
};
