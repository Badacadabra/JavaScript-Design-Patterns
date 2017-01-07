namespace person {
    // Public variables 
    const firstName: string = "Baptiste",
          lastName: string = "Vannesson";

    // Private variable 
    const secretNickname: string = "Bada";

    // Public functions
    const sayHello = (): string => `Hello, ${firstName} ${lastName}!`; 
    const getSecretNickname = (): string => secretNickname;

    // Revealed module
    export const me = { firstName, lastName, sayHello, getSecretNickname };
}

import me = person.me;

console.log(me.firstName, me.lastName); // OK 
console.log(me.sayHello()); // OK
// console.log(me.secretNickname); Oops! Undefined!
console.log(me.getSecretNickname()); // OK
