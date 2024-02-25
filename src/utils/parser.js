import {cd, ls, parseInput, up} from "../actions/index.js";

export const parser = async (input) => {
    let {command, source} = parseInput(input.trim());
    switch (command) {
        case('up'):
            console.log('1')
            up()
            break;
        case('cd'):
             cd(source)
            break;
        case('ls'):
            await ls()
            break;
    }
}
