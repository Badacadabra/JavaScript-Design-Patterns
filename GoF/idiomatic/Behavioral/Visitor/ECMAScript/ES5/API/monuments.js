'use strict';

// ==============================
// MONUMENTS 
// ==============================

module.exports = function (name) {
    return {
        name: name,
        accept: function (visitor) {
            return visitor.visit(this);
        }
    }
};
