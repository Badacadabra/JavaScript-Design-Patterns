'use strict'

# ==============================
# ABSTRACT FINANCIAL ENTITY
# ==============================

class FinancialEntity
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is FinancialEntity

    withdrawMoney: ->
        throw new Error "You cannot call an abstract method!"

module.exports = FinancialEntity
