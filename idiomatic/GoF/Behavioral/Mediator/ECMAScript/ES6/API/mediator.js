import { tom, dick } from './colleagues';

// ==============================
// MEDIATOR (HARRY)
// ==============================

export default {
    tom,
    dick,
    send(message, neighbor) {
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
