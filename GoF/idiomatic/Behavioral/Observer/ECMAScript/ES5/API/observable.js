'use strict';

// ==============================
// OBSERVABLE (GAZELLE)
// ==============================

module.exports = {
    predators: [],
    addPredator: function (predator) {
        this.predators.push(predator); 
    },
    notifyPredators: function () {
        var situation = "";
        for (var i = 0, len = this.predators.length; i < len; i++) {
            situation += this.predators[i].attack(); 
        }
        return situation;
    }
};
