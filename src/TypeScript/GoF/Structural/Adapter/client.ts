import HDMIToVGAAdapter from './API/HDMIToVGAAdapter';

// ==============================
// CLIENT CODE
// ==============================

let adapter: HDMIToVGAAdapter = new HDMIToVGAAdapter();

console.log(adapter.handleDigitalSignal()); // Your computer uses HDMI and your projector uses VGA
