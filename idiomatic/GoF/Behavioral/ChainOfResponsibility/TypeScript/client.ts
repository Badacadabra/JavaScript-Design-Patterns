import { walker, runner, swimmer } from './API/race';

// ==============================
// CLIENT CODE 
// ==============================

walker.nextRelay = runner;
runner.nextRelay = swimmer;

console.log(walker.go());
