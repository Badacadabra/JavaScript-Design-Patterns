namespace Mankind {
    export interface Human {
        sayHello(): string;
        getSecretNickname(): string;
    }

    export class Person implements Human {
        public firstName: string;
        public lastName: string;
        private nickname: string;

        constructor(firstName: string, lastName: string, nickname: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickname = nickname;
        } 

        public sayHello(): string {
            return `Hello, ${this.firstName} ${this.lastName}!` 
        }

        public getSecretNickname(): string {
            return this.nickname; 
        }
    }
}

import Person = Mankind.Person;
let me = new Person("Baptiste", "Vannesson", "Bada");

console.log(me.firstName, me.lastName); // OK 
console.log(me.sayHello()); // OK
// console.log(me.nickname); Oops! Undefined!
console.log(me.getSecretNickname()); // OK
