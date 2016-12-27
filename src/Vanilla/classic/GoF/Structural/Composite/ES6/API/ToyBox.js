import Toy from './Toy';

// ==============================
// COMPOSITE (CONCRETE) COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes.
export default class ToyBox extends Toy {
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

