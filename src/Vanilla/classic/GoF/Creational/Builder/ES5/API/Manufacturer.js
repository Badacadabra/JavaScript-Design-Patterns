'use strict';

// ==============================
// MANUFACTURER (DIRECTOR)
// ==============================

var Manufacturer = function () {};

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

module.exports = Manufacturer;
