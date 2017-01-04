// ==============================
// MONUMENTS 
// ==============================

const monument = name => {
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

const tourist = {
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
