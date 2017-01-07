const profile = (firstName: string) => {
    return (lastName: string) => {
        return (age: number) => {
            return (gender: string) => {
                return (nationality: string) => `First name: ${firstName}
Last name: ${lastName}
Age: ${age}
Gender: ${gender}
Nationality: ${nationality}`
            };
        };
    };
};

let myProfile: string = profile("Baptiste")("Vannesson")(27)("M")("French");

console.log(myProfile);
