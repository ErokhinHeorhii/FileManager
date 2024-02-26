import {cd, ls, parseInput, up} from "../actions/index.js";
import {cat} from "../fileOperation/index.js";

export const parser = async (input) => {
    let {command, source} = parseInput(input.trim());
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
    }
}
