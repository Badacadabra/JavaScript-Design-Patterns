// ==============================
// TEMPLATE METHOD
// ==============================

const build: (construction: Home) => string = function (construction: Home): string { 
    return `Construction of a new home:
1. ${construction.foundations()}
2. ${construction.walls()}
3. ${construction.roof()}
`};

// ==============================
// HOMES 
// ==============================

interface Home {
    foundations(): string;
    walls(): string;
    roof(): string;
}

const house: Home = {
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

const building: Home = {
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
