'use strict';

// ==============================
// ABSTRACT STATE
// ==============================

var ComputerState = (function () {
    function ComputerState() {
        if (this.constructor === ComputerState) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    ComputerState.prototype.power = function (pc) {
        throw new Error("You cannot call an abstract method!");
    };

    return ComputerState;
})();

// ==============================
// CONCRETE STATES 
// ==============================

var Off = (function () {
    function Off() {}
    Off.prototype = Object.create(ComputerState.prototype);
    Off.prototype.constructor = Off;

    Off.prototype.power = function (pc) {
        pc.setCurrentState(pc.getStates().on);
    };

    return Off;
})();

var On = (function () {
    function On() {}
    On.prototype = Object.create(ComputerState.prototype);
    On.prototype.constructor = On;

    On.prototype.power = function (pc) {
        pc.setCurrentState(pc.getStates().off);
    };

    return On;
})();

// ==============================
// CONCRETE CONTEXT
// ==============================

var Computer = (function() {
    var currentState = null,
        states = {
            off: new Off(),
            on: new On()
        };

    function Computer() {}

    Computer.prototype.power = function () {
        currentState.power(this); 
    };

    Computer.prototype.getCurrentState = function () {
        return currentState; 
    };

    Computer.prototype.setCurrentState = function (state) {
        currentState = state; 
    };

    Computer.prototype.getStates = function () {
        return states; 
    };

    return Computer;
})();

// ==============================
// CLIENT CODE
// ==============================

var pc = new Computer();

pc.setCurrentState(pc.getStates().off);

console.log(pc.getCurrentState().constructor.name); // Off
pc.power();
console.log(pc.getCurrentState().constructor.name); // On
pc.power();
console.log(pc.getCurrentState().constructor.name); // Off
