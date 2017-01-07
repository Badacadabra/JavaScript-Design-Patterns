'use strict';

// ==============================
// MANUFACTURER (DIRECTOR)
// ==============================

module.exports = {
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
