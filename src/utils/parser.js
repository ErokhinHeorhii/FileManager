import {cd, ls, parseInput, up} from "../actions/index.js";
import {add, cat, cp, mv, rn} from "../fileOperation/index.js";

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
        case('rn'):
            await rn(source, inputName)
            break
        case('cp'):
            await cp(source, inputName)
            break;
        case('mv'):
            await mv(source, inputName)
            break;
    }
}
