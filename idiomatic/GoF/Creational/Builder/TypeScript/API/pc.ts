// ==============================
// PC (PRODUCT)
// ==============================

export interface PC {
    motherboard: string;
    cpu: string;
    ram: string;
    ssd: string;
    nic: string;
    powerSupply: string;
    caseDesign: string;
    toString(): string;
}

export const pc: PC = {
    motherboard: "N/A",
    cpu: "N/A",
    ram: "N/A",
    ssd: "N/A",
    nic: "N/A",
    powerSupply: "N/A",
    caseDesign: "N/A",
    toString() {
        return `Motherboard: ${this.motherboard}
CPU: ${this.cpu}
RAM: ${this.ram} 
SSD: ${this.ssd}
NIC: ${this.nic}
Power supply: ${this.powerSupply}
Case design: ${this.caseDesign}`
    }
};
