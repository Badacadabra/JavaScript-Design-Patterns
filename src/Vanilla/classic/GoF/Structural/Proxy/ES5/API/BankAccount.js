'use strict';

var FinancialEntity = require('./FinancialEntity');

// ==============================
// CONCRETE BANK ACCOUNT
// ==============================

var BankAccount = function () {};
BankAccount.prototype = Object.create(FinancialEntity.prototype);
BankAccount.prototype.constructor = BankAccount;

BankAccount.prototype.withdrawMoney = function () {
    return "Enjoy the cash!";
};

module.exports = BankAccount;
