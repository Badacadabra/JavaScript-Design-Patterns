'use strict';

var BankAccount = require('./API/BankAccount'),
    ATM = require('./API/ATM');

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
