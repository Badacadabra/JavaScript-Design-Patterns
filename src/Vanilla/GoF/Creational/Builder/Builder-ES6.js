'use strict';

// ==============================
// PC (PRODUCT)
// ==============================

class PC {
    constructor() {
        this._motherboard = "";
        this._cpu = "";
        this._ram = "";
        this._ssd = "";
        this._nic = "";
        this._powerSupply = "";
        this._caseDesign = "";
    }

    set motherboard(part) {
        this._motherboard = part;
    }

    set cpu(part) {
        this._cpu = part;
    }

    set ram(part) {
        this._ram = part;
    }

    set ssd(part) {
        this._ssd = part;
    }

    set nic(part) {
        this._nic = part;
    }

    set powerSupply(part) {
        this._powerSupply = part;
    }

    set caseDesign(part) {
        this._caseDesign = part;
    }

    toString() {
        return `Motherboard: ${this._motherboard}
CPU: ${this._cpu}
RAM: ${this._ram}
SSD: ${this._ssd}
NIC: ${this._nic}
Power Supply: ${this._powerSupply}
Case design: ${this._caseDesign}`
    }
}

// ==============================
// ABSTRACT PC BUILDER
// ==============================

class Workforce {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    assemblePC() {
        throw new Error("You cannot call an abstract method!");
    }

    set motherboard(motherboard) {
        throw new Error("You cannot call an abstract method!");
    }

    set cpu(cpu) {
        throw new Error("You cannot call an abstract method!");
    }

    set ram(ram) {
        throw new Error("You cannot call an abstract method!");
    }

    set ssd(ssd) {
        throw new Error("You cannot call an abstract method!");
    }

    set nic(nic) {
        throw new Error("You cannot call an abstract method!");
    }

    set powerSupply(powerSupply) {
        throw new Error("You cannot call an abstract method!");
    }

    set caseDesign(caseDesign) {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE PC BUILDER
// ==============================

class Geek extends Workforce {
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

// ==============================
// MANUFACTURER (DIRECTOR)
// ==============================

class Manufacturer {
    static manufacture(builder) {
        builder.motherboard = "Asus Z170-A ATX LGA1151";
        builder.cpu = "Intel Core i7 6950X";
        builder.ram = "HyperX Fury 8 GB";
        builder.ssd = "SanDisk SSD PLUS 240 GB";
        builder.nic = "D-Link DGE-528T";
        builder.powerSupply = "Corsair RM750x";
        builder.caseDesign = "Cooler Master HAF X";
        return builder.assemblePC();
    }
}

// ==============================
// CLIENT CODE 
// ==============================

let geek = new Geek(),
    pc = Manufacturer.manufacture(geek);

console.log(pc);
