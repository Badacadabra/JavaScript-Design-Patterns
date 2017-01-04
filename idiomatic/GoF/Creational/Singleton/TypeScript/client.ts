import { me } from './API/me';
import { me as meAgain } from './API/me';

// ==============================
// CLIENT CODE 
// ==============================

// It will display 'OK' since 'me' and 'meAgain' are references to the same object.
// Only one instance exists in the code. This is what we expect from a Singleton. :)
if (me === meAgain) {
    console.log("OK");
} else {
    console.log("KO");
}
