'use strict'

Person = do -> 
    # Private member 
    secretNickname = ""

    class Person
        constructor: (@firstName, @lastName, nickname) ->
            secretNickname = nickname

        sayHello: -> 
            "Hello, #{this.firstName} #{this.lastName}!"

        getSecretNickname: -> 
            secretNickname

me = new Person "Baptiste", "Vannesson", "Bada" 

console.log me.firstName, me.lastName # OK 
console.log me.sayHello() # OK
console.log me.secretNickname # Oops! Undefined!
console.log me.getSecretNickname() # OK
