'use strict'

FinancialEntity = require './FinancialEntity'

# ==============================
# CONCRETE BANK ACCOUNT
# ==============================

class BankAccount extends FinancialEntity
    withdrawMoney: ->
        "Enjoy the cash!"

module.exports = BankAccount
