// ==============================
// ABSTRACT STATE
// ==============================

interface ComputerState {
    power(pc: Computer): void;
}

// ==============================
// CONCRETE STATES 
// ==============================

class Off implements ComputerState {
    public power(pc: Computer): void {
        pc.setCurrentState(pc.getStates().on);
    }
}

class On implements ComputerState {
    public power(pc: Computer): void {
        pc.setCurrentState(pc.getStates().off);
    }
}

// ==============================
// CONCRETE CONTEXT
// ==============================

class Computer {
    private currentState: ComputerState;
    private states: {off: Off; on: On} = {
        off: new Off(),
        on: new On()
    };

    public power(): void {
        this.currentState.power(this); 
    }

    public getCurrentState(): ComputerState {
        return this.currentState; 
    }

    public setCurrentState(state: ComputerState): void {
        this.currentState = state; 
    }

    public getStates(): {off: Off; on: On} {
        return this.states; 
    }
}

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
