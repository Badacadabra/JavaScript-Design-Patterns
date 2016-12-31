// ==============================
// TOY INTERFACE 
// ==============================

interface Toy {
    description(): string; 
    toys?: Toy[];
    add?: (toy: Toy) => void;
    inventory?: () => string;
}

// ==============================
// SIMPLE COMPONENT
// ==============================

// A ball does not contain anything

const createBall: () => Toy = function (): Toy { 
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

const createToyBox: () => Toy = function (): Toy {
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

// ==============================
// TEST 
// ==============================

// Here we organize our toys in an optimal way
let ball1: Toy = createBall(),
    ball2: Toy = createBall(),
    ball3: Toy = createBall(),
    bigToyBox: Toy = createToyBox(),
    smallToyBox: Toy = createToyBox();

smallToyBox.add(ball1);
bigToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
console.log(bigToyBox.inventory());
