'use strict';

var Me = require('./API/Me');

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
