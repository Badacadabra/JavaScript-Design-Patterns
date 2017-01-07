const profile = ({ firstName, lastName, age, gender, nationality }) => `First name: ${firstName}
Last name: ${lastName}
Age: ${age}
Gender: ${gender}
Nationality: ${nationality}`

let myProfile = profile({
    nationality: "French",
    gender: "M",
    firstName: "Baptiste",
    lastName: "Vannesson",
    age: 27
});

console.log(myProfile);
