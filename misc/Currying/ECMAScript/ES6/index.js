const profile = firstName => {
    return lastName => {
        return age => {
            return gender => {
                return nationality => `First name: ${firstName}
Last name: ${lastName}
Age: ${age}
Gender: ${gender}
Nationality: ${nationality}`
            };
        };
    };
};

let myProfile = profile("Baptiste")("Vannesson")(27)("M")("French");

console.log(myProfile);
