import {cd, hash, ls, parseInput, up} from "../actions/index.js";
import {add, cat, cp, mv, rn, mkdir, rm, compress, decompress} from "../fileOperation/index.js";
import {osF} from "../os/os.js";

export const parser = async (input) => {
    let {command, source, inputName} = parseInput(input.trim());

    switch (command) {
        case('up'):
            up()
            break;
        case('cd'):
             cd(source)
            break;
        case('ls'):
            await ls()
            break;
        case('cat'):
           await cat(source)
            break;
        case('add'):
            await add(source)
            break;
            case('mkdir'):
           await mkdir(source)
            break;
        case('rn'):
            await rn(source, inputName)
            break
        case('cp'):
            await cp(source, inputName)
            break;
        case('mv'):
            await mv(source, inputName)
            break;
        case('rm'):
            await rm(source)
            break;
        case('os'):
            await osF(source)
            break;
        case('hash'):
             hash(source)
            break;
        case('compress'):
            await compress(source, inputName)
            break;
        case('decompress'):
            await decompress(source, inputName)
            break;
    }
}
