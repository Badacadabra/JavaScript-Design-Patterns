import ComputerState from './ComputerState';
import Computer from './Computer';

// ==============================
// CONCRETE STATE
// ==============================

export default class On implements ComputerState {
    public power(pc: Computer): void {
        pc.setCurrentState(pc.getStates().off);
    }
}
