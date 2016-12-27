'use strict';

var Workforce = require('./Workforce'),
    PC = require('./PC');

// ==============================
// CONCRETE PC BUILDER
// ==============================

var Geek, pc;

Geek = function () {};
Geek.prototype = Object.create(Workforce.prototype);
Geek.prototype.constructor = Geek;

pc = new PC();

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

module.exports = Geek;
