'use strict'

# ==============================
# ORDER
# ==============================

module.exports =
    deliver: -> 
        @customer.pay()
