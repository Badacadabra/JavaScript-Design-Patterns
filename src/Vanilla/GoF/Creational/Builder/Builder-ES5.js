'use strict';

// ==============================
// PC (PRODUCT)
// ==============================

var PC;

PC = (function () {
    PC = function () {};

    var motherboard,
        cpu,
        ram,
        ssd,
        nic,
        powerSupply,
        caseDesign;

    PC.prototype.setMotherboard = function (part) {
        motherboard = part;
    };

    PC.prototype.setCpu = function (part) {
        cpu = part;
    };

    PC.prototype.setRam = function (part) {
        ram = part;
    };

    PC.prototype.setSsd = function (part) {
        ssd = part;
    };

    PC.prototype.setNic = function (part) {
        nic = part;
    };

    PC.prototype.setPowerSupply = function (part) {
        powerSupply = part;
    };

    PC.prototype.setCaseDesign = function (part) {
        caseDesign = part;
    };

    PC.prototype.toString = function () {
        var str = "";
            str += "Motherboard: " + motherboard + "\n";
            str += "CPU: " + cpu + "\n";
            str += "RAM: " + ram + "\n";
            str += "SSD: " + ssd + "\n";
            str += "NIC: " + nic + "\n";
            str += "Power supply: " + powerSupply + "\n";
            str += "Case design: " + caseDesign + "\n";

        return str;
    };

    return PC;
})();

// ==============================
// ABSTRACT PC BUILDER
// ==============================

var Workforce;

Workforce = (function () {
    Workforce = function () {
        if (this.constructor === Workforce) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    };

    Workforce.prototype = {
        assemblePC: function () {
            throw new Error("You cannot call an abstract method!");
        },
        setMotherboard: function (motherboard) {
            throw new Error("You cannot call an abstract method!");
        },
        setCpu: function (cpu) {
            throw new Error("You cannot call an abstract method!");
        },
        setRam: function (ram) {
            throw new Error("You cannot call an abstract method!");
        },
        setSsd: function (ssd) {
            throw new Error("You cannot call an abstract method!");
        },
        setNic: function (nic) {
            throw new Error("You cannot call an abstract method!");
        },
        setPowerSupply: function (powerSupply) {
            throw new Error("You cannot call an abstract method!");
        },
        setCaseDesign: function (caseDesign) {
            throw new Error("You cannot call an abstract method!");
        }
    };

    return Workforce;
})();

// ==============================
// CONCRETE PC BUILDER
// ==============================

var Geek;

Geek = (function () {
    Geek = function () {};
    Geek.prototype = Object.create(Workforce.prototype);
    Geek.prototype.constructor = Geek;

    var pc = new PC();

    Geek.prototype.assemblePC = function () {
        return pc.toString();
    };

    Geek.prototype.setMotherboard = function (motherboard) {
        pc.setMotherboard(motherboard);
    };

    Geek.prototype.setCpu = function (cpu) {
        pc.setCpu(cpu);
    };

    Geek.prototype.setRam = function (ram) {
        pc.setRam(ram);
    };

    Geek.prototype.setSsd = function (ssd) {
        pc.setSsd(ssd);
    };

    Geek.prototype.setNic = function (nic) {
        pc.setNic(nic);
    };

    Geek.prototype.setPowerSupply = function (powerSupply) {
        pc.setPowerSupply(powerSupply);
    };

    Geek.prototype.setCaseDesign = function (caseDesign) {
        pc.setCaseDesign(caseDesign);
    };

    return Geek;
})();

// ==============================
// MANUFACTURER (DIRECTOR)
// ==============================

var Manufacturer;

Manufacturer = (function () {
    Manufacturer = function () {};

    Manufacturer.manufacture = function (builder) {
        builder.setMotherboard("Asus Z170-A ATX LGA1151");
        builder.setCpu("Intel Core i7 6950X");
        builder.setRam("HyperX Fury 8 GB");
        builder.setSsd("SanDisk SSD PLUS 240 GB");
        builder.setNic("D-Link DGE-528T");
        builder.setPowerSupply("Corsair RM750x");
        builder.setCaseDesign("Cooler Master HAF X");
        return builder.assemblePC();
    };

    return Manufacturer;
})();

// ==============================
// CLIENT CODE 
// ==============================

var geek = new Geek(),
    pc = Manufacturer.manufacture(geek);

console.log(pc);
