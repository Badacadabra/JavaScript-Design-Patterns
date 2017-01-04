import { tom, dick } from './API/colleagues';
import harry from './API/mediator';

// ==============================
// CLIENT CODE 
// ==============================

let conversation = "";
conversation += tom.send("Could you lower the volume of your music, please?", harry);
conversation += dick.send("Are you serious? The volume is actually very low...", harry);

console.log(conversation);
