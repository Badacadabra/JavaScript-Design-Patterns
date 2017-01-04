'use strict';

// ==============================
// BANK ACCOUNT
// ==============================

var bankAccount = {
    withdrawMoney: function () {
        return "Enjoy the cash!";
    }
};

// ==============================
// PROXY (ATM)
// ==============================

module.exports = {
    account: bankAccount,
    withdrawMoney: function (code) {
        if (code !== 1337) {
            throw {
                type: "AuthenticationException",
                message: "Invalid code"
            };
        }
        return this.account.withdrawMoney();
    }
};
