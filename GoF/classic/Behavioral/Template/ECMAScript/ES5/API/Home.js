'use strict';

// ==============================
// ABSTRACT HOME 
// ==============================

var Home = function() {
    if (this.constructor === Home) {
        throw new Error("You cannot instantiate an abstract class!");
    } 
}

Home.prototype.foundations = function () {
    throw new Error("You cannot call an abstract method!");
};

Home.prototype.walls = function () {
    throw new Error("You cannot call an abstract method!");
};

Home.prototype.roof = function () {
    throw new Error("You cannot call an abstract method!");
};

Home.prototype.build = function () {
    var home = "";
    home += "Construction of a new home:\n";
    home += " 1. " + this.foundations();
    home += " 2. " + this.walls();
    home += " 3. " + this.roof();
    return home;
};

module.exports = Home;
