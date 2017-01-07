var profile = function (firstName) {
    return function (lastName) {
        return function (age) {
            return function (gender) {
                return function (nationality) {
                    var str = "";
                    str += "First name: " + firstName;
                    str += "\nLast name: " + lastName;
                    str += "\nAge: " + age;
                    str += "\nGender: " + gender;
                    str += "\nNationality: " + nationality;
                    return str;
                };
            };
        };
    };
};

var myProfile = profile("Baptiste")("Vannesson")(27)("M")("French");

console.log(myProfile);
