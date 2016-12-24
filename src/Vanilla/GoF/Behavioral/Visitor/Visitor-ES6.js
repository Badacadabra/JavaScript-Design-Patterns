// ==============================
// ABSTRACT MONUMENT 
// ==============================

class HistoricalMonument {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    accept(visitor) {
        throw new Error("You cannot instantiate an abstract class!");
    }
}

// ==============================
// ABSTRACT VISITOR
// ==============================

class Visitor {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    visit(monument) {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// CONCRETE MONUMENTS 
// ==============================

class Castle extends HistoricalMonument {
    accept(visitor) {
        return visitor.visit(this);
    }
}

class Abbey extends HistoricalMonument {
    accept(visitor) {
        return visitor.visit(this);
    }
}

// ==============================
// CONCRETE VISITOR 
// ==============================

class Tourist extends Visitor {
    visit(monument) {
        return `Visiting ${monument.constructor.name}`;
    }
}

// ==============================
// CLIENT CODE
// ==============================

let castle = new Castle(),
    abbey = new Abbey(),
    tourist = new Tourist();

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
