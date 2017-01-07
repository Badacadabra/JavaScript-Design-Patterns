'use strict'

me = do -> 
    # Public variables 
    firstName = "Baptiste"
    lastName = "Vannesson"

    # Private variable 
    secretNickname = "Bada"

    # Public functions
    sayHello = -> "Hello, #{firstName} #{lastName}!"
    getSecretNickname = -> secretNickname

    # Revealed module
    firstName: firstName
    lastName: lastName
    sayHello: sayHello
    getSecretNickname: getSecretNickname

console.log me.firstName, me.lastName # OK 
console.log me.sayHello() # OK
console.log me.secretNickname # Oops! Undefined!
console.log me.getSecretNickname() # OK
