// ==============================
// PC (PRODUCT)
// ==============================

const pc = {
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

// ==============================
// PC BUILDER
// ==============================

const geek = {
    pc: pc,
    assemblePC() {
        return this.pc.toString();
    },
    set motherboard(motherboard) {
        this.pc.motherboard = motherboard;
    },
    set cpu(cpu) {
        this.pc.cpu = cpu; 
    },
    set ram(ram) {
        this.pc.ram = ram; 
    },
    set ssd(ssd) {
        this.pc.ssd = ssd; 
    },
    set nic(nic) {
        this.pc.nic = nic; 
    },
    set powerSupply(powerSupply) {
        this.pc.powerSupply = powerSupply; 
    },
    set caseDesign(caseDesign) {
        this.pc.caseDesign = caseDesign; 
    }
}; 

// ==============================
// MANUFACTURER (DIRECTOR)
// ==============================

const manufacturer = {
    manufacture(builder) {
        builder.motherboard = "Asus Z170-A ATX LGA1151";
        builder.cpu = "Intel Core i7 6950X";
        builder.ram = "HyperX Fury 8 GB";
        builder.ssd = "SanDisk SSD PLUS 240 GB";
        builder.nic = "D-Link DGE-528T";
        builder.powerSupply = "Corsair RM750x";
        builder.caseDesign = "Cooler Master HAF X";
        return builder.assemblePC();
    }
};

// ==============================
// TEST 
// ==============================

let myPc = manufacturer.manufacture(geek);

console.log(myPc);
