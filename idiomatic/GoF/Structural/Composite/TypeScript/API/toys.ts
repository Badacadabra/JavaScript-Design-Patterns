// ==============================
// TOY INTERFACE 
// ==============================

export interface Toy {
    description(): string; 
    toys?: Toy[];
    add?: (toy: Toy) => void;
    inventory?: () => string;
}

// ==============================
// SIMPLE COMPONENT
// ==============================

// A ball does not contain anything

export const createBall: () => Toy = function (): Toy { 
    return {
        description() {
            return "There's a ball!\n";
        }
    }
};

// ==============================
// COMPOSITE COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes

export const createToyBox: () => Toy = function (): Toy {
    return {
        toys: [],
        description() {
            return "There's a toy box!\n";
        },
        add(toy) {
            this.toys.push(toy); 
        },
        inventory() {
            let inventory = "Let's open the toy box...\n";
            for (let toy of this.toys) {
                inventory += toy.description();
                if (toy.hasOwnProperty("toys")) {
                    inventory += toy.inventory();
                }
            }
            return inventory;
        }
    }
};
