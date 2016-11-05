'use strict';

// ==============================
// ABSTRACT CONNECTIONS
// ==============================

var AnalogInterface = (function () {
    function AnalogInterface() {
        if (this.constructor === AnalogInterface) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    AnalogInterface.prototype.handleDigitalSignal = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return AnalogInterface;
})();


var DigitalInterface = (function () {
    function DigitalInterface() {
        if (this.constructor === DigitalInterface) {
            throw new Error("You cannot instantiate an abstract class!");
        }
    }

    DigitalInterface.prototype.handleDigitalSignal = function () {
        throw new Error("You cannot call an abstract method!");
    };

    return DigitalInterface;
})();

// ==============================
// CONCRETE CONNECTIONS
// ==============================

// VGA has its own interface which handles images only through an analog signal
var VGA = (function () {
    var name = "VGA",
        data = "images",
        signal = "analog";

    function VGA() {}
    VGA.prototype = Object.create(AnalogInterface.prototype);
    VGA.prototype.constructor = VGA;

    VGA.prototype.handleAnalogSignal = function () {
        return "Interface: " + name + "\nData: " + data + "\nSignal: " + signal;
    };

    return VGA;
})();

// But your computer uses HDMI as output and your projector uses VGA as input...
// Here you need an adapter if you want to display images. The two interfaces are incompatible.
var HDMIToVGAAdapter = (function () {
    var vga = new VGA();

    function HDMIToVGAAdapter() {}
    HDMIToVGAAdapter.prototype = Object.create(DigitalInterface.prototype);
    HDMIToVGAAdapter.prototype.constructor = HDMIToVGAAdapter;

    HDMIToVGAAdapter.prototype.handleDigitalSignal = function () {
        return vga.handleAnalogSignal();
    };

    return HDMIToVGAAdapter;
})();

// ==============================
// CLIENT CODE
// ==============================

var adapter = new HDMIToVGAAdapter();

console.log(adapter.handleDigitalSignal()); // Your computer uses HDMI and your projector uses VGA
