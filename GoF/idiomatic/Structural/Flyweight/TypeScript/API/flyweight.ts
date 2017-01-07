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

const activeDistros: Map<string, LinuxDistro> = new Map();

export const linuxFactory: LinuxFactory = {
    getLinuxDistro(name) {
        name = name.toLowerCase();

        let linuxDistro;

        if (!activeDistros.get(name)) {
            switch (name) {
                case "debian":
                    linuxDistro = {
                        name: name.charAt(0).toUpperCase(),
                        boot() {
                            return "Debian is booting...";
                        }
                    };
                    activeDistros.set(name, linuxDistro);
                    return linuxDistro;
                case "redhat":
                    linuxDistro = {
                        name: name.charAt(0).toUpperCase(),
                        boot() {
                            return "RedHat is booting...";
                        }
                    };
                    activeDistros.set(name, linuxDistro);
                    return linuxDistro;
                case "slackware":
                    linuxDistro = {
                        name: name.charAt(0).toUpperCase(),
                        boot() {
                            return "Slackware is booting...";
                        }
                    };
                    activeDistros.set(name, linuxDistro);
                    return linuxDistro;
                default:
                    throw {
                        type: "Not found",
                        message: "The Linux distribution you are looking for has not been found."
                    }
            }
        }
        // If the distro has already been instantiated, we return the initial instance
        return activeDistros.get(name);
    }
};
