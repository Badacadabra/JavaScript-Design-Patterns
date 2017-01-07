'use strict';

var Person = (function () {
    var secretNickname;

    function Person(firstName, lastName, nickname) {
        // Public attributes
        this.firstName = firstName;
        this.lastName = lastName;
        // Private attribute
        secretNickname = nickname;
    }

    // Public methods
    Person.prototype.sayHello = function () {
        return "Hello, " + this.firstName + " " + this.lastName + "!"; 
    };

    Person.prototype.getSecretNickname = function () {
        return secretNickname; 
    };

    // Entry point of the module
    return Person; 
})();

var me = new Person("Baptiste", "Vannesson", "Bada");

console.log(me.firstName, me.lastName); // OK 
console.log(me.sayHello()); // OK
console.log(me.secretNickname); // Oops! Undefined!
console.log(me.getSecretNickname()); // OK
