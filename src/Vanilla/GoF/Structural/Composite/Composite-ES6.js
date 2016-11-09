// ==============================
// ABSTRACT COMPONENT
// ==============================

class Toy {
    constructor() {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    description() {
        throw new Error("You cannot call an abstract method!");
    }
}

// ==============================
// SIMPLE (CONCRETE) COMPONENT
// ==============================

// A ball does not contain anything
class Ball extends Toy {
    description() {
        return "There's a ball!\n";
    }
}

// ==============================
// COMPOSITE (CONCRETE) COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes.
class ToyBox extends Toy {
    constructor() {
        super();
        this._toys = [];
    }

    description() {
        return "There's a toy box!\n";
    }

    add(toy) {
        this._toys.push(toy);   
    }

    inventory() {
        let inventory = "Let's open the toy box...\n";
        for (let toy of this._toys) {
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
let ball1 = new Ball(),
    ball2 = new Ball(),
    ball3 = new Ball(),
    bigToyBox = new ToyBox(),
    smallToyBox = new ToyBox();

smallToyBox.add(ball1);
smallToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
console.log(bigToyBox.inventory());
