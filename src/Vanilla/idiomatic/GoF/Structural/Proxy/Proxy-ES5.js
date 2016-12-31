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
// PROXY 
// ==============================

var atm = {
    account: bankAccount,
    withdrawMoney: function (code) {
        if (code !== 1337) {
            throw {
                type: "AuthenticationException",
                message: "Invalid code"
            };
        }
        return atm.account.withdrawMoney();
    }
};

try {
    console.log(atm.withdrawMoney(1234)); // Wrong code
} catch (e) {
    console.log(e.type + " - " + e.message); // AuthenticationException - Invalid code
} finally {
    console.log(atm.withdrawMoney(1337)); // Enjoy the cash! 
}
