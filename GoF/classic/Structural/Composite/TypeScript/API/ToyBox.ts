import Toy from './Toy';

// ==============================
// COMPOSITE (CONCRETE) COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes.
export default class ToyBox implements Toy {
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
