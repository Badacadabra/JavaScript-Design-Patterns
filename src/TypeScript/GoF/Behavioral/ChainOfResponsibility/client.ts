import Racer from './API/Racer';
import Walker from './API/Walker';
import Runner from './API/Runner';
import Swimmer from './API/Swimmer';

// ==============================
// CLIENT CODE
// ==============================

let walker: Racer = new Walker(),
    runner: Racer = new Runner(),
    swimmer: Racer = new Swimmer();

walker.setNextRelay(runner);
runner.setNextRelay(swimmer);

console.log(walker.go());
