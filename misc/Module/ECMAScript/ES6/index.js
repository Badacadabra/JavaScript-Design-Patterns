const Person = (() => {
    let secretNickname;

    return class Person {
        constructor(firstName, lastName, nickname) {
            // Public attributes
            this.firstName = firstName;
            this.lastName = lastName;
            // Private attribute
            secretNickname = nickname;
        } 

        // Public methods
        sayHello() {
            return `Hello, ${this.firstName} ${this.lastName}!` 
        }

        getSecretNickname() {
            return secretNickname; 
        }
    }
})();

let me = new Person("Baptiste", "Vannesson", "Bada");

console.log(me.firstName, me.lastName); // OK 
console.log(me.sayHello()); // OK
console.log(me.secretNickname); // Oops! Undefined!
console.log(me.getSecretNickname()); // OK
