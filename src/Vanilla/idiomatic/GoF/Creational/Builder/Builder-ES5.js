'use strict';

// ==============================
// PC (PRODUCT)
// ==============================

var pc = {
    toString: function () {
        var str = "";
            str += "Motherboard: " + this.motherboard + "\n";
            str += "CPU: " + this.cpu + "\n";
            str += "RAM: " + this.ram + "\n";
            str += "SSD: " + this.ssd + "\n";
            str += "NIC: " + this.nic + "\n";
            str += "Power supply: " + this.powerSupply + "\n";
            str += "Case design: " + this.caseDesign + "\n";

        return str;
    }
};

// ==============================
// PC BUILDER
// ==============================

var geek = {
    pc: pc,
    assemblePC: function () {
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

var manufacturer = {
    manufacture: function (builder) {
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

var myPc = manufacturer.manufacture(geek);

console.log(myPc);
