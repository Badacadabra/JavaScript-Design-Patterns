// ==============================
// BANK ACCOUNT 
// ==============================

const bankAccount = {
    withdrawMoney(code) {
        return "Enjoy the cash!";
    }
};

// ==============================
// PROXY (ATM)
// ==============================

const atm = new Proxy(bankAccount, {
    get(target, prop) {
        const method = target[prop];
        return function (code) {
            if (code !== 1337) {
                throw {
                    type: "AuthenticationException",
                    message: "Invalid code"
                };
            }
            return method.call(this, code);
        };
    }
});

// ==============================
// TEST 
// ==============================

try {
    console.log(atm.withdrawMoney(1234)); // Wrong code
} catch (e) {
    console.log(e.type + " - " + e.message); // AuthenticationException - Invalid code
} finally {
    console.log(atm.withdrawMoney(1337)); // Enjoy the cash! 
}
