# PatternifyJS: JavaScript Design Patterns

## About

PatternifyJS is a reference of the main design patterns in the JavaScript world. External libraries are not covered, only the core languages are. Here is the list of all available languages:

* ECMAScript (Vanilla)
	* ES5
	* ES6
* CoffeeScript
* TypeScript

The Gang of Four (GoF) patterns are based on original synopses inspired from the real life and are available in two distinct flavors: "[classic](GoF/classic)" & "[idiomatic](GoF/idiomatic)".

The classic style emulates the principles of traditional class-based object-oriented languages like Java. Therefore, this style makes heavy use of abstraction, interfaces, classes, inheritance, composition, encapsulation and polymorphism. As a prototype-based language, JavaScript does not have all these functionalities natively (despite all the syntactic sugar introduced by ES6). But it is still possible to use and reproduce each of these concepts... For obvious reasons, constructor functions are the rule in the classic style. Moreover, each design pattern has its own class diagram in UML.

The idiomatic style reveals the true nature of JavaScript. Constructor functions and classes are replaced by factory functions and object literals, there is no abstraction anymore, encapsulation is reduced to the minimum and flexibility raised to the maximum. With this style, the GoF patterns are a bit difficult to recognize because their overall structure is blurred. But here it is more reasonable to think about objects directly, not about classes (see object diagrams in UML).

Apart from the GoF patterns, there are also miscellaneous (functional and more) patterns in JavaScript that make life easier. They can be of a great help!

## Gang of Four (GoF) patterns

* Creational
	* AbstractFactory ([classic](GoF/classic/Creational/AbstractFactory) | [idiomatic](GoF/idiomatic/Creational/AbstractFactory))
	* Builder ([classic](GoF/classic/Creational/Builder) | [idiomatic](GoF/idiomatic/Creational/Builder))
	* Factory ([classic](GoF/classic/Creational/Factory) | [idiomatic](GoF/idiomatic/Creational/Factory))
	* Prototype ([classic](GoF/classic/Creational/Prototype) | [idiomatic](GoF/idiomatic/Creational/Prototype))
	* Singleton ([classic](GoF/classic/Creational/Singleton) | [idiomatic](GoF/idiomatic/Creational/Singleton))

* Structural
	* Adapter ([classic](GoF/classic/Structural/Adapter) | [idiomatic](GoF/idiomatic/Structural/Adapter))
	* Bridge ([classic](GoF/classic/Structural/Bridge) | [idiomatic](GoF/idiomatic/Structural/Bridge))
	* Composite ([classic](GoF/classic/Structural/Composite) | [idiomatic](GoF/idiomatic/Structural/Composite))
	* Decorator ([classic](GoF/classic/Structural/Decorator) | [idiomatic](GoF/idiomatic/Structural/Decorator))
	* Facade ([classic](GoF/classic/Structural/Facade) | [idiomatic](GoF/idiomatic/Structural/Facade))
	* Flyweight ([classic](GoF/classic/Structural/Flyweight) | [idiomatic](GoF/idiomatic/Structural/Flyweight))
	* Proxy ([classic](GoF/classic/Structural/Proxy) | [idiomatic](GoF/idiomatic/Structural/Proxy))

* Behavioral
	* Chain of Responsibility ([classic](GoF/classic/Behavioral/ChainOfResponsibility) | [idiomatic](GoF/idiomatic/Behavioral/ChainOfResponsibility))
	* Command ([classic](GoF/classic/Behavioral/Command) | [idiomatic](GoF/idiomatic/Behavioral/Command))
	* Interpreter ([classic](GoF/classic/Behavioral/Interpreter) | [idiomatic](GoF/idiomatic/Behavioral/Interpreter))
	* Iterator ([classic](GoF/classic/Behavioral/Iterator) | [idiomatic](GoF/idiomatic/Behavioral/Iterator))
	* Mediator ([classic](GoF/classic/Behavioral/Mediator) | [idiomatic](GoF/idiomatic/Behavioral/Mediator))
	* Memento ([classic](GoF/classic/Behavioral/Memento) | [idiomatic](GoF/idiomatic/Behavioral/Memento))
	* Observer ([classic](GoF/classic/Behavioral/Observer) | [idiomatic](GoF/idiomatic/Behavioral/Observer))
	* State ([classic](GoF/classic/Behavioral/State) | [idiomatic](GoF/idiomatic/Behavioral/State))
	* Strategy ([classic](GoF/classic/Behavioral/Strategy) | [idiomatic](GoF/idiomatic/Behavioral/Strategy))
	* Template ([classic](GoF/classic/Behavioral/Template) | [idiomatic](GoF/idiomatic/Behavioral/Template))
	* Visitor ([classic](GoF/classic/Behavioral/Visitor) | [idiomatic](GoF/idiomatic/Behavioral/Visitor))

## Miscellaneous patterns

* [Currying](misc/Currying)
* [Module](misc/Module)
* [Object Specifier](misc/ObjectSpecifier)
* [Revealing Module](misc/RevealingModule)

## Inspiring resources

* *JavaScript: The Definitive Guide*, **David Flanagan**
* *JavaScript: The Good Parts*, **Douglas Crockford**
* *Learning JavaScript Design Patterns*, **Addy Osmani**
* *Exploring ES6*, **Axel Rauschmayer**
* *The Little Book on CoffeeScript*, **Alex MacCaw**
* *TypeScript Deep Dive*, **Basarat Ali Syed**
