'use strict';

// ==============================
// ABSTRACT COLLEAGUE 
// ==============================

var Neighbor = (function() {
    function Neighbor(mediator) {
        if (this.constructor === Neighbor) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._mediator = mediator;
    }

    Neighbor.prototype.send = function (message) {
        throw new Error("You cannot instantiate an abstract class!");
    };

    Neighbor.prototype.receive = function (message, sender) {
        throw new Error("You cannot instantiate an abstract class!");
    };

    return Neighbor;
})();

// ==============================
// ABSTRACT MEDIATOR
// ==============================

var Mediator = (function() {
    function Mediator() {
        if (this.constructor === Mediator) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Mediator.prototype.send = function (message, neighbor) {
        throw new Error("You cannot instantiate an abstract class!");
    };

    return Mediator;
})();

// ==============================
// CONCRETE COLLEAGUES (NEIGHBORS)
// ==============================

var Tom = (function () {
    function Tom(mediator) {
        Neighbor.call(this, mediator);
    }
    Tom.prototype = Object.create(Neighbor.prototype);
    Tom.prototype.constructor = Tom;

    Tom.prototype.send = function (message) {
        return this._mediator.send(message, this);
    };

    Tom.prototype.receive = function (message, sender) {
        return "[Tom] Message from " + sender + ": '" + message + "'\n";
    };

    return Tom;
})();

var Dick = (function () {
    function Dick(mediator) {
        Neighbor.call(this, mediator);
    }
    Dick.prototype = Object.create(Neighbor.prototype);
    Dick.prototype.constructor = Dick;

    Dick.prototype.send = function (message) {
        return this._mediator.send(message, this);
    };

    Dick.prototype.receive = function (message, sender) {
        return "[Dick] Message from " + sender + ": '" + message + "'\n";
    };

    return Dick;
})();

// ==============================
// CONCRETE MEDIATOR 
// ==============================

var Harry = (function () {
    var tom = new Tom(this),
        dick = new Dick(this);

    function Harry() {}
    Harry.prototype = Object.create(Mediator.prototype);
    Harry.prototype.constructor = Harry;

    Harry.prototype.send = function (message, neighbor) {
        if (neighbor instanceof Tom) {
            return dick.receive(message, "Tom");
        } else if (neighbor instanceof Dick) {
            return tom.receive(message, "Dick");
        } else {
            throw new Error("Unknown neighbor");
        }
    };

    return Harry;
})();

// ==============================
// CLIENT CODE
// ==============================

var harry = new Harry(),
    tom = new Tom(harry),
    dick = new Dick(harry),
    conversation = "";

conversation += tom.send("Could you lower the volume of your music, please?");
conversation += dick.send("Are you serious? The volume is actually very low...");

console.log(conversation);
