import ComputerState from './ComputerState';

// ==============================
// CONCRETE STATE
// ==============================

export default class On extends ComputerState {
    power(pc) {
        pc.setCurrentState(pc.getStates().off);
    }
}
