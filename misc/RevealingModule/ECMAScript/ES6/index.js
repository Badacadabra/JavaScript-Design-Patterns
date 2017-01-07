const me = (() => {
    // Public variables 
    const firstName = "Baptiste",
          lastName = "Vannesson";

    // Private variable 
    const secretNickname = "Bada";

    // Public functions
    const sayHello = () => `Hello, ${firstName} ${lastName}!`; 
    const getSecretNickname = () => secretNickname;

    // Revealed module
    return { firstName, lastName, sayHello, getSecretNickname };
})();

console.log(me.firstName, me.lastName); // OK 
console.log(me.sayHello()); // OK
console.log(me.secretNickname); // Oops! Undefined!
console.log(me.getSecretNickname()); // OK
