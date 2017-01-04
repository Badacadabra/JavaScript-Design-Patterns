'use strict';

var pc = require('./pc');

// ==============================
// PC BUILDER
// ==============================

module.exports = {
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
