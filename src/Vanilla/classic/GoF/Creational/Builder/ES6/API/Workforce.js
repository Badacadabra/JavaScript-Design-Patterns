// ==============================
// ABSTRACT PC BUILDER
// ==============================

export default class Workforce {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    assemblePC() {
        throw new Error("You cannot call an abstract method!");
    }

    set motherboard(motherboard) {
        throw new Error("You cannot call an abstract method!");
    }

    set cpu(cpu) {
        throw new Error("You cannot call an abstract method!");
    }

    set ram(ram) {
        throw new Error("You cannot call an abstract method!");
    }

    set ssd(ssd) {
        throw new Error("You cannot call an abstract method!");
    }

    set nic(nic) {
        throw new Error("You cannot call an abstract method!");
    }

    set powerSupply(powerSupply) {
        throw new Error("You cannot call an abstract method!");
    }

    set caseDesign(caseDesign) {
        throw new Error("You cannot call an abstract method!");
    }
}

