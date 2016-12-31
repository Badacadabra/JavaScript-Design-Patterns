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

var tom = neighbor("Tom"),
    dick = neighbor("Dick");

// ==============================
// MEDIATOR 
// ==============================

var harry = {
    tom: tom,
    dick: dick,
    send: function (message, neighbor) {
        if (neighbor.name === "Tom") {
            return dick.receive(message, "Tom");
        } else if (neighbor.name === "Dick") {
            return tom.receive(message, "Dick");
        } else {
            throw {
                type: "Not found",
                message: "The given person has not been found in the neighborhood."
            } 
        }
    }
};

// ==============================
// TEST 
// ==============================

var conversation = "";
conversation += tom.send("Could you lower the volume of your music, please?", harry);
conversation += dick.send("Are you serious? The volume is actually very low...", harry);

console.log(conversation);
