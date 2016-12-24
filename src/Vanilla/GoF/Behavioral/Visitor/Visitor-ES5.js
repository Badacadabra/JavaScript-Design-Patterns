'use strict';

// ==============================
// ABSTRACT MONUMENT
// ==============================

var HistoricalMonument = (function() {
    function HistoricalMonument() {
        if (this.constructor === HistoricalMonument) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    HistoricalMonument.prototype.accept = function (visitor) {
        throw new Error("You cannot instantiate an abstract class!");
    };

    return HistoricalMonument;
})();

// ==============================
// ABSTRACT VISITOR
// ==============================

var Visitor = (function() {
    function Visitor() {
        if (this.constructor === Visitor) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    Visitor.prototype.visit = function (monument) {
        throw new Error("You cannot call an abstract method!");
    };

    return Visitor;
})();

// ==============================
// CONCRETE MONUMENTS 
// ==============================

var Castle = (function () {
    function Castle() {}
    Castle.prototype = Object.create(HistoricalMonument.prototype);
    Castle.prototype.constructor = Castle;

    Castle.prototype.accept = function (visitor) {
        return visitor.visit(this);
    };

    return Castle;
})();

var Abbey = (function () {
    function Abbey() {}
    Abbey.prototype = Object.create(HistoricalMonument.prototype);
    Abbey.prototype.constructor = Abbey;

    Abbey.prototype.accept = function (visitor) {
        return visitor.visit(this);
    };

    return Abbey;
})();

// ==============================
// CONCRETE VISITOR 
// ==============================

var Tourist = (function () {
    function Tourist() {}
    Tourist.prototype = Object.create(Visitor.prototype);
    Tourist.prototype.constructor = Tourist;

    Tourist.prototype.visit = function (monument) {
        return "Visiting " + monument.constructor.name;
    };

    return Tourist;
})();

// ==============================
// CLIENT CODE
// ==============================

var castle = new Castle(),
    abbey = new Abbey(),
    tourist = new Tourist();

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
