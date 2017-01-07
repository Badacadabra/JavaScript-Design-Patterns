'use strict'

FinancialEntity = require './FinancialEntity'

# ==============================
# CONCRETE ATM 
# ==============================

class ATM extends FinancialEntity
    constructor: (@_bankAccount) ->

    withdrawMoney: (code) ->
        throw type: "AuthenticationException", message: "Invalid code" if code isnt 1337
        @_bankAccount.withdrawMoney()

module.exports = ATM
