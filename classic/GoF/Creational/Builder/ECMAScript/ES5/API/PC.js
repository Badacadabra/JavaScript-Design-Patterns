'use strict';

// ==============================
// PC (PRODUCT)
// ==============================

var PC,
    motherboard,
    cpu,
    ram,
    ssd,
    nic,
    powerSupply,
    caseDesign;

PC = function() {};

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

module.exports = PC;
