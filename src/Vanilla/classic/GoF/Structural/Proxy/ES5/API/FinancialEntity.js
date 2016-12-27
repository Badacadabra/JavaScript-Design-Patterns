'use strict';

// ==============================
// ABSTRACT FINANCIAL ENTITY
// ==============================

var FinancialEntity = function () {
    if (this.constructor === FinancialEntity) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

FinancialEntity.prototype.withdrawMoney = function () {
    throw new Error("You cannot call an abstract method!");
};

module.exports = FinancialEntity;
