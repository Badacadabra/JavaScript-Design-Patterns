import Off from './Off';
import On from './On';

// ==============================
// CONCRETE CONTEXT
// ==============================

export default class Computer {
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
