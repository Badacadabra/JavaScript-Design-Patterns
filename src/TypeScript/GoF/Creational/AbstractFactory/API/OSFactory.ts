import LinuxDistro from './LinuxDistro';
import MacRelease from './MacRelease';
import WindowsVersion from './WindowsVersion';

// ==============================
// ABSTRACT FACTORY OF OPERATING SYSTEMS 
// ==============================

export default interface OSFactory {
    getLinuxDistro(id: number): LinuxDistro | never;
    getMacRelease(id: number): MacRelease | never;
    getWindowsVersion(id: number): WindowsVersion | never;
}
