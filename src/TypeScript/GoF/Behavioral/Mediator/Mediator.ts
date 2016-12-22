// ==============================
// ABSTRACT COLLEAGUE 
// ==============================

abstract class Neighbor {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public abstract send(message: string): string;
    public abstract receive(message: string, sender: string): string;
}

// ==============================
// ABSTRACT MEDIATOR
// ==============================

interface Mediator {
    send(message: string, neighbor: Neighbor): string;
}

// ==============================
// CONCRETE COLLEAGUES (NEIGHBORS)
// ==============================

class Tom extends Neighbor {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    send(message: string): string {
        return this.mediator.send(message, this);
    }

    receive(message: string, sender: string): string {
        return `[Tom] Message from ${sender}: '${message}'\n`;
    }
}

class Dick extends Neighbor {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    send(message: string): string {
        return this.mediator.send(message, this);
    }

    receive(message: string, sender: string): string {
        return `[Dick] Message from ${sender}: '${message}'\n`;
    }
}

// ==============================
// CONCRETE MEDIATOR 
// ==============================

class Harry implements Mediator {
    private tom: Tom = new Tom(this);
    private dick: Dick = new Dick(this);

    send(message: string, neighbor: Neighbor): string {
        if (neighbor instanceof Tom) {
            return this.dick.receive(message, "Tom");
        } else if (neighbor instanceof Dick) {
            return this.tom.receive(message, "Dick");
        } else {
            throw new Error("Unknown neighbor");
        }
    }
}

// ==============================
// CLIENT CODE
// ==============================

let harry: Mediator = new Harry(),
    tom: Neighbor = new Tom(harry),
    dick: Neighbor = new Dick(harry),
    conversation: string = "";

conversation += tom.send("Could you lower the volume of your music, please?");
conversation += dick.send("Are you serious? The volume is actually very low...");

console.log(conversation);
