// ==============================
// ABSTRACT MONUMENT 
// ==============================

interface HistoricalMonument {
    accept(visitor: Visitor): string;
}

// ==============================
// ABSTRACT VISITOR
// ==============================

interface Visitor {
    visit(monument: HistoricalMonument): string;
}

// ==============================
// CONCRETE MONUMENTS 
// ==============================

class Castle implements HistoricalMonument {
    public accept(visitor: Visitor): string {
        return visitor.visit(this);
    }
}

class Abbey implements HistoricalMonument {
    public accept(visitor: Visitor): string {
        return visitor.visit(this);
    }
}

// ==============================
// CONCRETE VISITOR 
// ==============================

// Necessary declaration in TypeScript to access a class name (see the "visit" method)
interface Function {
    name: string;
}

class Tourist implements Visitor {
    public visit(monument: HistoricalMonument): string {
        return `Visiting ${monument.constructor.name}`;
    }
}

// ==============================
// CLIENT CODE
// ==============================

let castle: HistoricalMonument = new Castle(),
    abbey: HistoricalMonument = new Abbey(),
    tourist: Visitor = new Tourist();

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
