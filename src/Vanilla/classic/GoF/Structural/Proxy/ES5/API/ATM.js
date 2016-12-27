'use strict';

var FinancialEntity = require('./FinancialEntity');

// ==============================
// CONCRETE ATM 
// ==============================

var ATM, bankAccount;

ATM = function (account) {
    bankAccount = account;
};
ATM.prototype = Object.create(FinancialEntity.prototype);
ATM.prototype.constructor = ATM;

ATM.prototype.withdrawMoney = function (code) {
    if (code !== 1337) {
        throw {
            type: "AuthenticationException",
            message: "Invalid code"
        };
    }
    return bankAccount.withdrawMoney();
};

module.exports = ATM;
