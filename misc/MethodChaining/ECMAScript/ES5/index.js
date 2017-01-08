var person = {
    setFirstName: function (firstName) {
        this.firstName = firstName || "John";
        return this;
    },
    setLastName: function (lastName) {
        this.lastName = lastName || "Doe";
        return this;
    },
    sayHello: function () {
        if (!this.firstName || !this.lastName) {
            throw {
                type: "No data",
                message: "A person needs a first name and a last name before to say hello."
            }; 
        }
        return "Hello, " + this.firstName + " " + this.lastName + "!"; 
    }
};

try {
    console.log(person.setFirstName("Baptiste").setLastName("Vannesson").sayHello()); // Here is the chain!
} catch (e) {
    console.log(e.type + " - " + e.message);
}
