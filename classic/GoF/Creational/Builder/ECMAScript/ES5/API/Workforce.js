'use strict';

// ==============================
// ABSTRACT PC BUILDER
// ==============================

var Workforce = function () {
    if (this.constructor === Workforce) {
        throw new Error("You cannot instantiate an abstract class!");
    }
};

Workforce.prototype.assemblePC = function () {
    throw new Error("You cannot call an abstract method!");
};

Workforce.prototype.setMotherboard = function (motherboard) {
    throw new Error("You cannot call an abstract method!");
};

Workforce.prototype.setCpu = function (cpu) {
    throw new Error("You cannot call an abstract method!");
};

Workforce.prototype.setRam = function (ram) {
    throw new Error("You cannot call an abstract method!");
};

Workforce.prototype.setSsd = function (ssd) {
    throw new Error("You cannot call an abstract method!");
};

Workforce.prototype.setNic = function (nic) {
    throw new Error("You cannot call an abstract method!");
};

Workforce.prototype.setPowerSupply = function (powerSupply) {
    throw new Error("You cannot call an abstract method!");
};

Workforce.prototype.setCaseDesign = function (caseDesign) {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Workforce;
