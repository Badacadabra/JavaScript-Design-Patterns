// ==============================
// TEMPLATE METHOD
// ==============================

const build = construction => `Construction of a new home:
1. ${construction.foundations()}
2. ${construction.walls()}
3. ${construction.roof()}
`;

// ==============================
// HOMES 
// ==============================

const house = {
    foundations() {
        return "House foundations";
    },
    walls() {
        return "House walls";
    },
    roof() {
        return "House roof";
    }
};

const building = {
    foundations() {
        return "Apartment building foundations";
    },
    walls() {
        return "Apartment building walls";
    },
    roof() {
        return "Apartment building roof";
    }
};

// ==============================
// TEST
// ==============================

console.log(build(house));
console.log(build(building));
