'use strict';

// ==============================
// ABSTRACT FINANCIAL ENTITY
// ==============================

var FinancialEntity = (function () {
    function FinancialEntity() {
        if (this.constructor === FinancialEntity) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    FinancialEntity.prototype.withdrawMoney = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return FinancialEntity;
})();

// ==============================
// CONCRETE BANK ACCOUNT
// ==============================

var BankAccount = (function () {
    function BankAccount() {}
    BankAccount.prototype = Object.create(FinancialEntity.prototype);
    BankAccount.prototype.constructor = BankAccount;

    BankAccount.prototype.withdrawMoney = function () {
        return "Enjoy the cash!";
    };

    return BankAccount;
})();

// ==============================
// CONCRETE ATM 
// ==============================

var ATM = (function () {
    var bankAccount;

    function ATM(account) {
        bankAccount = account;
    }
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

    return ATM;
})();

// ==============================
// CLIENT CODE 
// ==============================

var bankAccount = new BankAccount(),
    proxy = new ATM(bankAccount);

try {
    console.log(proxy.withdrawMoney(1234)); // Wrong code
} catch (e) {
    console.log(e.type + " - " + e.message); // AuthenticationException - Invalid code
} finally {
    console.log(proxy.withdrawMoney(1337)); // Enjoy the cash! 
}
