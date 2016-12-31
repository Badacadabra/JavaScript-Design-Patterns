import ComputerState from './ComputerState';

// ==============================
// CONCRETE STATE
// ==============================

export default class Off extends ComputerState {
    power(pc) {
        pc.setCurrentState(pc.getStates().on);
    }
}
