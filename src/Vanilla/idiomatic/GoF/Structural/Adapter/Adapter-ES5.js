'use strict';

// ==============================
// CONNECTIONS
// ==============================

// VGA has its own interface which handles images only through an analog signal
var vga = {
    name: "VGA",
    data: "images",
    signal: "analog",
    handleAnalogSignal: function () {
        return "Interface: " + this.name + "\nData: " + this.data + "\nSignal: " + this.signal;
    }
};

// But your computer uses HDMI as output and your projector uses VGA as input...
// Here you need an adapter if you want to display images.
var hdmiToVgaAdapter = {
    vga: vga,
    handleDigitalSignal: function () {
        return this.vga.handleAnalogSignal();
    }
};

// ==============================
// TEST
// ==============================

console.log(hdmiToVgaAdapter.handleDigitalSignal()); // Your computer uses HDMI and your projector uses VGA
