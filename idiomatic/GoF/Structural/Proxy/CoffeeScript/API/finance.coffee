'use strict'

# ==============================
# BANK ACCOUNT
# ==============================

bankAccount =
    withdrawMoney: -> 
        "Enjoy the cash!"

# ==============================
# PROXY (ATM)
# ==============================

module.exports =
    account: bankAccount
    withdrawMoney: (code) -> 
        if code isnt 1337
            throw
                type: "AuthenticationException"
                message: "Invalid code"
        this.account.withdrawMoney()
