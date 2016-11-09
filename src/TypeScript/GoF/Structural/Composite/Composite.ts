// ==============================
// ABSTRACT COMPONENT
// ==============================

interface Toy {
    description(): string;
}

// ==============================
// SIMPLE (CONCRETE) COMPONENT
// ==============================

// A ball does not contain anything
class Ball implements Toy {
    public description(): string {
        return "There's a ball!\n";
    }
}

// ==============================
// COMPOSITE (CONCRETE) COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes.
class ToyBox implements Toy {
    private toys: Toy[] = [];

    public description(): string {
        return "There's a toy box!\n";
    }

    public add(toy: Toy): void {
        this.toys.push(toy);   
    }

    public inventory(): string {
        let inventory: string = "Let's open the toy box...\n";
        for (let toy of this.toys) {
            inventory += toy.description();
            if (toy instanceof ToyBox) {
                inventory += toy.inventory();
            }
        }
        return inventory;
    }
}

// ==============================
// CLIENT CODE
// ==============================

// Here we organize our toys in an optimal way
let ball1: Ball = new Ball(),
    ball2: Ball = new Ball(),
    ball3: Ball = new Ball(),
    bigToyBox: ToyBox = new ToyBox(),
    smallToyBox: ToyBox = new ToyBox();

smallToyBox.add(ball1);
smallToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
console.log(bigToyBox.inventory());
