'use strict';

// ==============================
// ABSTRACT PROTOTYPE
// ==============================

var PaperSheet = function () {
    if (this.constructor === PaperSheet) {
        throw new Error("You cannot instantiate an abstract class!");
    }
};

PaperSheet.prototype.photocopy = function () { // clone method
    throw new Error("You cannot call an abstract method!");
};

module.exports = PaperSheet;
