'use strict';

// ==============================
// SINGLETON: "ME"
// ==============================

// We use an IIFE (Immediately-Invoked Function Expression) for encapsulation.
// Otherwise, the scope would be global!
var Me = (function () {
 
    // Here the constructor is private (closure)
    var Me = function () {
        this.firstName = "Baptiste";
        this.lastName = "Vannesson";
    };
  
    // Static method to get the unique instance of 'Me'
    Me.getInstance = function () {
        if (!Me.instance) {
        // Static attribute which holds the unique instance of 'Me'
            Me.instance = new Me();
        }
        return Me.instance;
    };
 
    // This is the only visible part from the outside
    return {
        getInstance: function () {
            return Me.getInstance();
        }
    };
  
})();

// ==============================
// CLIENT CODE 
// ==============================

var me = Me.getInstance(),
    meAgain = Me.getInstance();

// It will display 'OK' since 'me' and 'meAgain' are references to the same object.
// Only one instance exists in the code. This is what we expect from a Singleton. :)
if (me === meAgain) {
    console.log("OK");
} else {
    console.log("KO");
}
