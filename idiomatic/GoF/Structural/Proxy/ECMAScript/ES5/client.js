'use strict';

var atm = require('./API/finance');

// ==============================
// CLIENT CODE 
// ==============================

try {
    console.log(atm.withdrawMoney(1234)); // Wrong code
} catch (e) {
    console.log(e.type + " - " + e.message); // AuthenticationException - Invalid code
} finally {
    console.log(atm.withdrawMoney(1337)); // Enjoy the cash! 
}
