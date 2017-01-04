// ==============================
// MONUMENTS 
// ==============================

interface Monument {
    name: string;
    accept(visitor: Visitor): string;
}

const monument: (name: string) => Monument = function (name: string): Monument {
    return {
        name: name,
        accept(visitor) {
            return visitor.visit(this);
        }
    }
};

// ==============================
// VISITOR 
// ==============================

interface Visitor {
    visit(monument: Monument): string;
}

const tourist: Visitor = {
    visit(monument) {
        return `Visiting ${monument.name}`;
    }
};

// ==============================
// TEST 
// ==============================

let castle = monument('Castle'),
    abbey = monument('Abbey');

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
