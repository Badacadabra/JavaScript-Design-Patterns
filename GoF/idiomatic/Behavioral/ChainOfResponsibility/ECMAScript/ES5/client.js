'use strict';

var race = require('./API/race');

// ==============================
// CLIENT CODE 
// ==============================

race.walker.nextRelay = race.runner;
race.runner.nextRelay = race.swimmer;

console.log(race.walker.go());
