import HistoricalMonument from './API/HistoricalMonument';
import Visitor from './API/Visitor';
import Castle from './API/Castle';
import Abbey from './API/Abbey';
import Tourist from './API/Tourist';

// ==============================
// CLIENT CODE
// ==============================

let castle: HistoricalMonument = new Castle(),
    abbey: HistoricalMonument = new Abbey(),
    tourist: Visitor = new Tourist();

console.log(castle.accept(tourist));
console.log(abbey.accept(tourist));
