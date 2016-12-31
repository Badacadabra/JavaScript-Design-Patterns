// ==============================
// COLLEAGUES (NEIGHBORS)
// ==============================

const neighbor = name => {
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

const tom = neighbor("Tom"),
    dick = neighbor("Dick");

// ==============================
// MEDIATOR 
// ==============================

const harry = {
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
