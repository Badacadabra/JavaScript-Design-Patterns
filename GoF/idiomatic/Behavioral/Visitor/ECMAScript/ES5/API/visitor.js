'use strict';

// ==============================
// VISITOR (TOURIST) 
// ==============================

module.exports = {
    visit: function (monument) {
        return "Visiting " + monument.name;
    }
};
