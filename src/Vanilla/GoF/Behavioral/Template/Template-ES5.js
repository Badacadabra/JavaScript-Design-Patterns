'use strict';

// ==============================
// ABSTRACT HOME 
// ==============================

var Home = (function() {
    function Home() {
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

    return Home;
})();

// ==============================
// CONCRETE HOMES 
// ==============================

var House = (function () {
    function House() {}
    House.prototype = Object.create(Home.prototype);
    House.prototype.constructor = House;

    House.prototype.foundations = function () {
        return "House foundations\n";
    };

    House.prototype.walls = function () {
        return "House walls\n";
    };

    House.prototype.roof = function () {
        return "House roof\n";
    };

    return House;
})();

var Building = (function () {
    function Building() {}
    Building.prototype = Object.create(Home.prototype);
    Building.prototype.constructor = Building;

    Building.prototype.foundations = function () {
        return "Apartment building foundations\n";
    };

    Building.prototype.walls = function () {
        return "Apartment building walls\n";
    };

    Building.prototype.roof = function () {
        return "Apartment building roof\n";
    };

    return Building;
})();

// ==============================
// CLIENT CODE
// ==============================

var house = new House(),
    building = new Building();

console.log(house.build());
console.log(building.build());
