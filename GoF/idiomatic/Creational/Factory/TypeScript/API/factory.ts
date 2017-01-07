// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

export interface LinuxDistro {
    name: string;
    boot(): string;
}

export interface LinuxFactory {
    getLinuxDistro(name: string): LinuxDistro | never;
}

export const linuxFactory: LinuxFactory = {
    getLinuxDistro(name) {
        name = name.toLowerCase();
        switch (name) {
            case "debian":
                return {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "Debian is booting...";
                    }
                }
            case "redhat":
                return {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "RedHat is booting...";
                    }
                }
            case "slackware":
                return {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "Slackware is booting...";
                    }
                }
            default:
                throw {
                    type: "Not found",
                    message: "The Linux distribution you are looking for has not been found"
                }
        }
    }
};
