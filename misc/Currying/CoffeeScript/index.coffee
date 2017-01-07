profile = (firstName) ->
    (lastName) -> 
        (age) ->
            (gender) -> 
                (nationality) -> 
                    """
                    First name: #{firstName}
                    Last name: #{lastName}
                    Age: #{age}
                    Gender: #{gender}
                    Nationality: #{nationality}
                    """

myProfile = profile("Baptiste")("Vannesson")(27)("M")("French")

console.log myProfile
