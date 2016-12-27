import LinuxDistro from './LinuxDistro';

// ==============================
// CONCRETE GNU/LINUX DISTRO
// ==============================

export default class Slackware extends LinuxDistro {
    constructor() {
        super(Slackware.name);
    }
}
