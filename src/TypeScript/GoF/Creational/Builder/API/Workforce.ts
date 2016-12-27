// ==============================
// ABSTRACT PC BUILDER
// ==============================

export default interface Workforce {
    assemblePC(): string;
    setMotherboard(motherboard: string): void;
    setCpu(cpu: string): void;
    setRam(ram: string): void;
    setSsd(ssd: string): void;
    setNic(nic: string): void;
    setPowerSupply(powerSupply: string): void;
    setCaseDesign(caseDesign: string): void;
}
