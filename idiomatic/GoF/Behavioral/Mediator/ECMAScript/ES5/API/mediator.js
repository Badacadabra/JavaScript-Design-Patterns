'use strict';

var neighbors = require('./colleagues');

// ==============================
// MEDIATOR (HARRY)
// ==============================

module.exports = {
    tom: neighbors.tom,
    dick: neighbors.dick,
    send: function (message, neighbor) {
        if (neighbor.name === "Tom") {
            return this.dick.receive(message, "Tom");
        } else if (neighbor.name === "Dick") {
            return this.tom.receive(message, "Dick");
        } else {
            throw {
                type: "Not found",
                message: "The given person has not been found in the neighborhood."
            } 
        }
    }
};
