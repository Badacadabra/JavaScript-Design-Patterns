var profile = function (person) {
    var str = "";
        str += "First name: " + person.firstName;
        str += "\nLast name: " + person.lastName;
        str += "\nAge: " + person.age;
        str += "\nGender: " + person.gender;
        str += "\nNationality: " + person.nationality;
    return str;
};

var myProfile = profile({
    nationality: "French",
    gender: "M",
    firstName: "Baptiste",
    lastName: "Vannesson",
    age: 27
});

console.log(myProfile);
