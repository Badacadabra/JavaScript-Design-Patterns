interface Person {
    setFirstName(firstName: string): Person;
    setLastName(lastName: string): Person;
    sayHello(): string | never;
}

const person: Person = {
    setFirstName(firstName: string = "John"): Person {
        this.firstName = firstName;
        return this;
    },
    setLastName(lastName: string = "Doe"): Person {
        this.lastName = lastName;
        return this;
    },
    sayHello(): string | never {
        if (!this.firstName || !this.lastName) {
            throw {
                type: "No data",
                message: "A person needs a first name and a last name before to say hello."
            }; 
        }
        return `Hello, ${this.firstName} ${this.lastName}!`; 
    }
};

try {
    console.log(person.setFirstName("Baptiste").setLastName("Vannesson").sayHello()); // Here is the chain!
} catch (e) {
    console.log(e.type + " - " + e.message);
}
