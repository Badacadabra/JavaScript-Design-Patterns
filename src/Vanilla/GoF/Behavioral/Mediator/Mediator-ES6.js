// ==============================
// ABSTRACT COLLEAGUE 
// ==============================

class Neighbor {
    constructor(mediator) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._mediator = mediator;
    }

    send(message) {
        throw new Error("You cannot instantiate an abstract class!");
    }

    receive(message, sender) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

// ==============================
// ABSTRACT MEDIATOR
// ==============================

class Mediator {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    send(message, neighbor) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

// ==============================
// CONCRETE COLLEAGUES (NEIGHBORS)
// ==============================

class Tom extends Neighbor {
    constructor(mediator) {
        super(mediator);
    }

    send(message) {
        return this._mediator.send(message, this);
    }

    receive(message, sender) {
        return `[Tom] Message from ${sender}: '${message}'\n`;
    }
}

class Dick extends Neighbor {
    constructor(mediator) {
        super(mediator);
    }

    send(message) {
        return this._mediator.send(message, this);
    }

    receive(message, sender) {
        return `[Dick] Message from ${sender}: '${message}'\n`;
    }
}

// ==============================
// CONCRETE MEDIATOR 
// ==============================

class Harry extends Mediator {
    constructor() {
        super();
        this._tom = new Tom(this),
        this._dick = new Dick(this);
    }

    send(message, neighbor) {
        if (neighbor instanceof Tom) {
            return this._dick.receive(message, "Tom");
        } else if (neighbor instanceof Dick) {
            return this._tom.receive(message, "Dick");
        } else {
            throw new Error("Unknown neighbor");
        }
    }
}

// ==============================
// CLIENT CODE
// ==============================

let harry = new Harry(),
    tom = new Tom(harry),
    dick = new Dick(harry),
    conversation = "";

conversation += tom.send("Could you lower the volume of your music, please?");
conversation += dick.send("Are you serious? The volume is actually very low...");

console.log(conversation);
