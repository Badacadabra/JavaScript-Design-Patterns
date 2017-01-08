person =
    setFirstName: (@firstName = "John") -> @
    setLastName: (@lastName = "Doe") -> @
    sayHello: -> 
        if !@firstName or !@lastName
            throw
                type: "No data"
                message: "A person needs a first name and a last name before to say hello."
        "Hello, #{this.firstName} #{this.lastName}!"

try
    console.log person.setFirstName("Baptiste").setLastName("Vannesson").sayHello() # Here is the chain!
catch e
    console.log #{e.type} - #{e.message}
