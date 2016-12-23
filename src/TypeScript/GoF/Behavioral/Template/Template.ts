// ==============================
// ABSTRACT HOME 
// ==============================

abstract class Home {
    public abstract foundations(): string;
    public abstract walls(): string;
    public abstract roof(): string;

    public build(): string {
        return `
Construction of a new home:
 1. ${this.foundations()}
 2. ${this.walls()}
 3. ${this.roof()}`;
    }
}

// ==============================
// CONCRETE HOMES 
// ==============================

class House extends Home {
    public foundations(): string {
        return "House foundations";
    }

    public walls(): string {
        return "House walls";
    }

    public roof(): string {
        return "House roof";
    }
}

class Building extends Home {
    public foundations(): string {
        return "Apartment building foundations";
    }

    public walls(): string {
        return "Apartment building walls";
    }

    public roof(): string {
        return "Apartment building roof";
    }
}

// ==============================
// CLIENT CODE
// ==============================

let house: Home = new House(),
    building: Home = new Building();

console.log(house.build());
console.log(building.build());
