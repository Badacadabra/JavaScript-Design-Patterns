// ==============================
// PC (PRODUCT)
// ==============================

interface PC {
    motherboard: string;
    cpu: string;
    ram: string;
    ssd: string;
    nic: string;
    powerSupply: string;
    caseDesign: string;
    toString(): string;
}

const pc: PC = {
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

// ==============================
// PC BUILDER
// ==============================

interface Geek {
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

const geek: Geek = {
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

// ==============================
// MANUFACTURER (DIRECTOR)
// ==============================

interface Manufacturer {
    manufacture(builder: Geek): string;
}

const manufacturer: Manufacturer = {
    manufacture(builder) {
        builder.setMotherboard("Asus Z170-A ATX LGA1151");
        builder.setCpu("Intel Core i7 6950X");
        builder.setRam("HyperX Fury 8 GB");
        builder.setSsd("SanDisk SSD PLUS 240 GB");
        builder.setNic("D-Link DGE-528T");
        builder.setPowerSupply("Corsair RM750x");
        builder.setCaseDesign("Cooler Master HAF X");
        return builder.assemblePC();
    }
};

// ==============================
// TEST 
// ==============================

let myPc: string = manufacturer.manufacture(geek);

console.log(myPc);
