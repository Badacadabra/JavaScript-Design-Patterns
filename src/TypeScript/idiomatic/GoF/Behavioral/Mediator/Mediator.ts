// ==============================
// COLLEAGUES (NEIGHBORS)
// ==============================

interface Neighbor {
    name: string;
    send(message: string, mediator: Mediator): string;
    receive(message: string, sender: string): string;
}

const neighbor: (name: string) => Neighbor = function (name: string): Neighbor {
    return {
        name: name,
        send(message, mediator) {
            return mediator.send(message, this);
        },
        receive(message, sender) {
            return `[${this.name}] Message from ${sender}: '${message}'\n`;
        }
    }
};

const tom: Neighbor = neighbor("Tom"),
      dick: Neighbor = neighbor("Dick");

// ==============================
// MEDIATOR 
// ==============================

interface Mediator {
    tom: Neighbor;
    dick: Neighbor;
    send(message: string, neighbor: Neighbor): string;
}

const harry: Mediator = {
    tom,
    dick,
    send(message, neighbor) {
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

let conversation = "";
conversation += tom.send("Could you lower the volume of your music, please?", harry);
conversation += dick.send("Are you serious? The volume is actually very low...", harry);

console.log(conversation);
