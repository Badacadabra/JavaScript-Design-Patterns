// ==============================
// PC (PRODUCT)
// ==============================

export default {
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
