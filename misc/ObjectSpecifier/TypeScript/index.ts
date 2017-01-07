interface Person {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    nationality: string;
}

const profile = (person: Person) => `First name: ${person.firstName}
Last name: ${person.lastName}
Age: ${person.age}
Gender: ${person.gender}
Nationality: ${person.nationality}`

let myProfile: string = profile({
    nationality: "French",
    gender: "M",
    firstName: "Baptiste",
    lastName: "Vannesson",
    age: 27
});

console.log(myProfile);
