'use strict';

var me = (function () {
    // Public variables 
    var firstName = "Baptiste",
        lastName = "Vannesson";

    // Private variable 
    var secretNickname = "Bada";

    // Public functions
    function sayHello() {
        return "Hello, " + firstName + " " + lastName + "!"; 
    }

    function getSecretNickname() {
        return secretNickname; 
    }

    // Revealed module
    return {
        firstName: firstName,
        lastName: lastName,
        sayHello: sayHello,
        getSecretNickname: getSecretNickname,
    };
})(); 

console.log(me.firstName, me.lastName); // OK 
console.log(me.sayHello()); // OK
console.log(me.secretNickname); // Oops! Undefined!
console.log(me.getSecretNickname()); // OK
