import ComputerState from './ComputerState';
import Off from './Off';
import On from './On';

// ==============================
// CONCRETE CONTEXT
// ==============================

export default class Computer {
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
