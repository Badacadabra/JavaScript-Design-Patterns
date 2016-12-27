import Walker from './API/Walker';
import Runner from './API/Runner';
import Swimmer from './API/Swimmer';

// ==============================
// CLIENT CODE
// ==============================

let walker = new Walker(),
    runner = new Runner(),
    swimmer = new Swimmer();

walker.setNextRelay(runner);
runner.setNextRelay(swimmer);

console.log(walker.go());
