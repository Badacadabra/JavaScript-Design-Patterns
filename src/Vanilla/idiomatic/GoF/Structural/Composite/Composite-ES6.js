// ==============================
// SIMPLE COMPONENT
// ==============================

// A ball does not contain anything
const createBall = () => { 
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
const createToyBox = () => {
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
let ball1 = createBall(),
    ball2 = createBall(),
    ball3 = createBall(),
    bigToyBox = createToyBox(),
    smallToyBox = createToyBox();

smallToyBox.add(ball1);
bigToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
console.log(bigToyBox.inventory());
