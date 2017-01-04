'use strict';

// ==============================
// COLLEAGUES (NEIGHBORS)
// ==============================

var neighbor = function (name) {
    return {
        name: name,
        send: function (message, mediator) {
            return mediator.send(message, this);
        },
        receive: function (message, sender) {
            return "[" + this.name + "] Message from " + sender + ": '" + message + "'\n";
        }
    }
};

module.exports = {
    tom: neighbor("Tom"),
    dick: neighbor("Dick")
};
