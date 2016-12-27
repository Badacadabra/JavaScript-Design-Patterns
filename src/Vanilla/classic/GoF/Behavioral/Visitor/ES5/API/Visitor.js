'use strict';

// ==============================
// ABSTRACT VISITOR
// ==============================

var Visitor = function() {
    if (this.constructor === Visitor) {
        throw new Error("You cannot instantiate an abstract class!");
    }
};

Visitor.prototype.visit = function (monument) {
    throw new Error("You cannot call an abstract method!");
};

module.exports = Visitor;
