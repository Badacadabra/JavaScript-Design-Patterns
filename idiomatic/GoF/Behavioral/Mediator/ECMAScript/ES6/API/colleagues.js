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

export const tom = neighbor("Tom");
export const dick = neighbor("Dick");

