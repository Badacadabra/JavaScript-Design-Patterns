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

export default new Proxy(bankAccount, {
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
