'use strict';

// ==============================
// ORDER
// ==============================

module.exports = {
    deliver: function () {
        return this.customer.pay(); 
    }
};
