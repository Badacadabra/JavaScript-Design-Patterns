// ==============================
// PC (PRODUCT)
// ==============================

export default class PC {
    private motherboard: string;
    private cpu: string;
    private ram: string;
    private ssd: string;
    private nic: string;
    private powerSupply: string;
    private caseDesign: string;

    public setMotherboard(motherboard): void {
        this.motherboard = motherboard;
    }

    public setCpu(cpu): void {
        this.cpu = cpu;
    }

    public setRam(ram): void {
        this.ram = ram;
    }

    public setSsd(ssd): void {
        this.ssd = ssd;
    }

    public setNic(nic): void {
        this.nic = nic;
    }

    public setPowerSupply(powerSupply): void {
        this.powerSupply = powerSupply;
    }

    public setCaseDesign(caseDesign): void {
        this.caseDesign = caseDesign;
    }

    public toString(): string {
        return `Motherboard: ${this.motherboard}
CPU: ${this.cpu}
RAM: ${this.ram}
SSD: ${this.ssd}
NIC: ${this.nic}
Power Supply: ${this.powerSupply}
Case design: ${this.caseDesign}`
    }
}
