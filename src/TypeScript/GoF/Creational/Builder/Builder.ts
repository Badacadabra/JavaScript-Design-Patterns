// ==============================
// PC (PRODUCT)
// ==============================

class PC {
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

// ==============================
// ABSTRACT PC BUILDER
// ==============================

interface Workforce {
    assemblePC(): string;
    setMotherboard(motherboard: string): void;
    setCpu(cpu: string): void;
    setRam(ram: string): void;
    setSsd(ssd: string): void;
    setNic(nic: string): void;
    setPowerSupply(powerSupply: string): void;
    setCaseDesign(caseDesign: string): void;
}

// ==============================
// CONCRETE PC BUILDER
// ==============================

class Geek implements Workforce {
    private pc: PC = new PC();

    public assemblePC(): string {
        return this.pc.toString();  
    }

    public setMotherboard(motherboard: string): void {
        this.pc.setMotherboard(motherboard);
    }

    public setCpu(cpu: string): void {
        this.pc.setCpu(cpu);
    }

    public setRam(ram: string): void {
        this.pc.setRam(ram);
    }

    public setSsd(ssd: string): void {
        this.pc.setSsd(ssd);
    }

    public setNic(nic: string): void {
        this.pc.setNic(nic);
    }

    public setPowerSupply(powerSupply: string): void {
        this.pc.setPowerSupply(powerSupply);
    }

    public setCaseDesign(caseDesign: string): void {
        this.pc.setCaseDesign(caseDesign);
    }
}

// ==============================
// MANUFACTURER (DIRECTOR)
// ==============================

class Manufacturer {
    public static manufacture(builder: Workforce): string {
        builder.setMotherboard("Asus Z170-A ATX LGA1151");
        builder.setCpu("Intel Core i7 6950X");
        builder.setRam("HyperX Fury 8 GB");
        builder.setSsd("SanDisk SSD PLUS 240 GB");
        builder.setNic("D-Link DGE-528T");
        builder.setPowerSupply("Corsair RM750x");
        builder.setCaseDesign("Cooler Master HAF X");
        return builder.assemblePC();
    }
}

// ==============================
// CLIENT CODE 
// ==============================

let geek: Geek = new Geek(),
    pc: string = Manufacturer.manufacture(geek);

console.log(pc);
