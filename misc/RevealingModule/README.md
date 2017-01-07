# Problem

JavaScript is not very strict when it comes to encapsulation and each script tends to pollute the global namespace. This is because the language has been built with global variables in mind.

# Solution

The Revealing Module pattern is a great solution to encapsulate some code. The idea is to store in a variable the returned expression of an IIFE (Immediately-Invoked Function Expression), which is generally an object literal that exposes all public members of the module. Within the IIFE, the scope is private. We can then declare private variables and functions that will be invisible from the outside. Conceptually, a module is a bit like a class. 

N.B. In practice, this pattern is not often used anymore. CommonJS, AMD, or built-in ES6 modules are much better solutions nowadays... However, the legacy of this pattern is still visible in ES5 code, especially in CommonJS modules where module.exports exposes public members using an object literal.

```javascript
// CommonJS (Revealing) Module exports
module.exports = {
    firstName: firstName,
    lastName: lastName,
    sayHello: sayHello,
    getSecretNickname: getSecretNickname
};
```
