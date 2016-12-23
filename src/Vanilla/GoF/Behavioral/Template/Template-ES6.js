// ==============================
// ABSTRACT HOME 
// ==============================

class Home {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        } 
    }

    foundations() {
        throw new Error("You cannot call an abstract method!");
    }

    walls() {
        throw new Error("You cannot call an abstract method!");
    }

    roof() {
        throw new Error("You cannot call an abstract method!");
    }

    build() {
        return `
Construction of a new home:
 1. ${this.foundations()}
 2. ${this.walls()}
 3. ${this.roof()}`;
    }
}

// ==============================
// CONCRETE HOMES 
// ==============================

class House extends Home {
    foundations() {
        return "House foundations";
    }

    walls() {
        return "House walls";
    }

    roof() {
        return "House roof";
    }
}

class Building extends Home {
    foundations() {
        return "Apartment building foundations";
    }

    walls() {
        return "Apartment building walls";
    }

    roof() {
        return "Apartment building roof";
    }
}

// ==============================
// CLIENT CODE
// ==============================

let house = new House(),
    building = new Building();

console.log(house.build());
console.log(building.build());
