// ==============================
// ABSTRACT STATE
// ==============================

class ComputerState {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    power(pc) {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE STATES 
// ==============================

class Off extends ComputerState {
    power(pc) {
        pc.setCurrentState(pc.getStates().on);
    }
}

class On extends ComputerState {
    power(pc) {
        pc.setCurrentState(pc.getStates().off);
    }
}

// ==============================
// CONCRETE CONTEXT
// ==============================

class Computer {
    constructor() {
        this._currentState = null;
        this._states = {
            off: new Off(),
            on: new On()
        };
    }

    power() {
        this._currentState.power(this); 
    }

    getCurrentState() {
        return this._currentState; 
    }

    setCurrentState(state) {
        this._currentState = state; 
    }

    getStates() {
        return this._states; 
    }
}

// ==============================
// CLIENT CODE
// ==============================

let pc = new Computer();

pc.setCurrentState(pc.getStates().off);

console.log(pc.getCurrentState().constructor.name); // Off
pc.power();
console.log(pc.getCurrentState().constructor.name); // On
pc.power();
console.log(pc.getCurrentState().constructor.name); // Off
