import { pc, PC } from './pc';

// ==============================
// PC BUILDER
// ==============================

export interface Geek {
    pc: PC;
    assemblePC(): string;
    setMotherboard(motherboard: string): void;
    setCpu(cpu: string): void;
    setRam(ram: string): void;
    setSsd(ssd: string): void;
    setNic(nic: string): void;
    setPowerSupply(powerSupply: string): void;
    setCaseDesign(caseDesign: string): void;
}

export const geek: Geek = {
    pc: pc,
    assemblePC() {
        return this.pc.toString();
    },
    setMotherboard(motherboard) {
        this.pc.motherboard = motherboard;
    },
    setCpu(cpu) {
        this.pc.cpu = cpu; 
    },
    setRam(ram) {
        this.pc.ram = ram; 
    },
    setSsd(ssd) {
        this.pc.ssd = ssd; 
    },
    setNic(nic) {
        this.pc.nic = nic; 
    },
    setPowerSupply(powerSupply) {
        this.pc.powerSupply = powerSupply; 
    },
    setCaseDesign(caseDesign) {
        this.pc.caseDesign = caseDesign; 
    }
}; 
