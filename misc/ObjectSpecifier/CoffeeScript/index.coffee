profile = (person) ->
    """
    First name: #{person.firstName}
    Last name: #{person.lastName}
    Age: #{person.age}
    Gender: #{person.gender}
    Nationality: #{person.nationality}
    """

myProfile = profile
    nationality: "French"
    gender: "M"
    firstName: "Baptiste"
    lastName: "Vannesson"
    age: 27

console.log myProfile
