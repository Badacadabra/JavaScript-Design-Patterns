import Workforce from './Workforce';
import PC from './PC';

// ==============================
// CONCRETE PC BUILDER
// ==============================

export default class Geek extends Workforce {
    constructor() {
        super();
        this._pc = new PC();
    }

    assemblePC() {
        return this._pc.toString();  
    }

    set motherboard(motherboard) {
        this._pc.motherboard = motherboard;
    }

    set cpu(cpu) {
        this._pc.cpu = cpu;
    }

    set ram(ram) {
        this._pc.ram = ram;
    }

    set ssd(ssd) {
        this._pc.ssd = ssd;
    }

    set nic(nic) {
        this._pc.nic = nic;
    }

    set powerSupply(powerSupply) {
        this._pc.powerSupply = powerSupply;
    }

    set caseDesign(caseDesign) {
        this._pc.caseDesign = caseDesign;
    }
}

