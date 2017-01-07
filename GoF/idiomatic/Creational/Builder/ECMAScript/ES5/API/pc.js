'use strict';

// ==============================
// PC (PRODUCT)
// ==============================

module.exports = {
    toString: function () {
        var str = "";
            str += "Motherboard: " + this.motherboard + "\n";
            str += "CPU: " + this.cpu + "\n";
            str += "RAM: " + this.ram + "\n";
            str += "SSD: " + this.ssd + "\n";
            str += "NIC: " + this.nic + "\n";
            str += "Power supply: " + this.powerSupply + "\n";
            str += "Case design: " + this.caseDesign;

        return str;
    }
};
