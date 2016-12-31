'use strict'

# ==============================
# BANK ACCOUNT
# ==============================

bankAccount =
    withdrawMoney: -> 
        "Enjoy the cash!"

# ==============================
# PROXY 
# ==============================

atm =
    account: bankAccount
    withdrawMoney: (code) -> 
        if code isnt 1337
            throw
                type: "AuthenticationException"
                message: "Invalid code"
        atm.account.withdrawMoney()

try
    console.log atm.withdrawMoney 1234  # Wrong code
catch e
    console.log "#{e.type} - #{e.message}" # AuthenticationException - Invalid code
finally
    console.log atm.withdrawMoney 1337  # Enjoy the cash! 
