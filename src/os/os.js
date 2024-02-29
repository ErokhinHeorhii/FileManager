import {EOL, cpus, userInfo, arch} from 'node:os';
import {PathApp} from "../utils/index.js";

export const osF = (osInput) => {
    switch (osInput) {
        case('--EOL'):
            console.log(EOL)
            break;
        case('--cpus'):
            console.table(cpus())
            break;
        case('--homedir'):
            console.table(userInfo().homedir)
            break;
        case('--username'):
            console.table(userInfo().username)
            break;
        case('--architecture'):
            console.log(arch())
            break;
    }
}
